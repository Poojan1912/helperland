const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const fs = require('fs')
const SendMail = require('./sendMail')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const { createHmac } = require('crypto');
var crypto = require("crypto");
const jwt = require('jsonwebtoken');
const { log } = require('console')
const port = 5000
const { v4: uuidv4 } = require('uuid');
const { el } = require('date-fns/locale')

server.use(middlewares)
server.use(bodyParser.json())
server.listen(port, () => {
  console.log('JSON Server is running')
})

// routes
server.post("/api/PublicPages/SaveContactUsDetails", (req, res) => {
  const obj = req.body;
  const text = `${obj.firstName} ${obj.lastName} says: ${obj.message}. His/Her email is ${obj.email} and Mobile number is ${obj.mobileNumber}. He wanted to talk to you on ${obj.subject}`
  const subject = `${obj.firstName} wants to contact you!`
  try {
    SendMail('pandyapoojan2000@gmail.com', subject, text)
  }
  catch (err) {
    console.log("Error: ", err)
  }
})

server.post("/api/Account/Register", (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const obj = req.body;
    let data = db;
    //check if email already exist
    let user = data.users.find(x => x.email === obj.email);
    if (user) {
      res.status(400).send({ message: "Email already exist" });
    }
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    obj.customerId = randomNumber;
    data.users.push(obj);
    fs.writeFile("./db.json", JSON.stringify(data), (err, result) => {
      if (err) {
        res.status(401).json({ error: err });
        return;
      }
      else {
        res.status(200).json({ message: "User registered Successfully." });
      }
    })
  }
  catch (error) {
    console.log(error);
  }
})

server.post("/api/Account/Login", (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const obj = req.body;
    let data = db;
    let user = data.users.find(x => x.email === obj.email && x.password === obj.password);
    if (user) {
      jwt.sign({ email: obj.email }, 'fjnfdskjnfq', (err, token) => {
        if (err) {
          res.status(401).json({ error: err });
          return;
        }
        res.status(200).json({ token: token, email: obj.email, firstName: user.firstName, userType: user.userTypeId, message: "Login Successful." });
      })
    }
    else {
      res.status(401).json({ error: "Invalid credentials" })
    }
  }
  catch (error) {
    console.log(error);
  }

})

// accept reset password
server.post("/api/Account/ResetPassword", (req, res) => {
  try {
    //check if data exist in resetpassword db
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const obj = req.body;
    console.log(obj);
    let data = db;
    // check in resetpassword if token exist
    let userToken = data.resetPassword.find(x => x.token === obj.token);
    const userEmail = userToken.email;
    if (userToken) {
      //update password      
      data.users.find(x => x.email === userEmail).password = obj.password;
      fs.writeFile("./db.json", JSON.stringify(data), (err, result) => {
        if (err) {
          res.status(401).json({ error: err });
          return;
        }
        else {
          res.status(200).json({ message: "Password updated Successfully." });
        }
      })
    }
  }
  catch (error) {
    console.log(error);
  }
})

// forgot password
server.post("/api/Account/SendForgotPasswordLink", async (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const obj = req.body;
    let data = db;
    let user = data.users.find(x => x.email === obj.email);
    console.log(user);

    if (user) {
      const secret = 'abcdefg';
      console.log("it is coming here");
      // create random token
      const randomData = crypto.randomBytes(20).toString('hex');

      const token = createHmac('sha256', secret)
        .update(randomData)
        .digest('hex');
      const url = `http://localhost:3000/resetPassword/${token}`;
      const subject = "Helperland - Please reset your password";
      const text = `Please click on the link below to reset your password\n\n${url}`;
      data.resetPassword.push({ email: user.email, token: token });
      fs.writeFile("./db.json", JSON.stringify(data), async (err, result) => {
        if (err) {
          res.status(401).json({ error: err });
          return;
        }
        else {
          const maildata = await SendMail(obj.email, subject, text);
          await res.status(200).json({ message: "Reset password link sent successfully." });
        }
      })
    }
    else {
      res.status(401).json({ error: "Email does not exist." })
    }
  }
  catch (error) {
    console.log(error);
  }
})

// check for the postalcode
server.post("/api/Account/CheckPostalCode", (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const obj = req.body;
    let data = db;
    let postalCode = data.address.find(x => x.postalCode === obj.postalCode);
    if (postalCode) {
      res.status(200).json({ message: "Postal code is valid" })
    }
    else {
      res.status(401).json({ error: "We are not providing service in this area. We’ll notify you if any helper would start working near your area." })
    }
  }
  catch {
    console.log(error);
  }
})

server.post("/api/Account/Address", async function (req, res) {
  try {
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db;
    const obj = req.body;
    obj.addressId = uuidv4();
    console.log(obj);
    const userObj = db.users.find((user) => user.email === "pandyapoojan2000@gmail.com");
    const userIndex = db.users.findIndex((user) => user.email === "pandyapoojan2000@gmail.com");
    if (!(userObj.hasOwnProperty('address'))) {
      data.users[userIndex].address = [];
    }
    data.users[userIndex].address.push(obj);
    fs.writeFile("./db.json", JSON.stringify(data), (err, result) => {
      if (err) {
        res.status(401).json({ error: err });
        return;
      }
      else {
        res.status(200).json({ message: "address added", userObj });
      }
    })
  }
  catch (error) {
    console.log(error);
  }
})


// post all the book service data
server.post("/api/BookService", async function (req, res) {
  try {
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db;
    const obj = req.body;
    console.log(obj);
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    obj.serviceId = randomNumber;
    data.bookService.push(obj);
    fs.writeFile("./db.json", JSON.stringify(data), (err, result) => {
      if (err) {
        res.status(401).json({ error: err });
        return;
      }
      else {
        res.status(200).json({ message: "book service added", obj });
      }
    })
  }
  catch (error) {
    console.log(error);
  }
})

// get all book service from db
server.post("/api/CustomerDashboard", (req, res) => {
  try {
    const obj = req.body;
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db.bookService;
    console.log(obj.email);
    data = data.filter((x) => x.email === obj.email);
    data = data.filter((x) => x.status === "Remaining");
    // data.map((x) => {
    //   x.date = new Date(x.date).toLocaleDateString('en-GB');
    //   console.log(typeof x.date)
    // })
    res.status(200).json(data);
  }
  catch (error) {
    console.log(error);
  }
})

server.post("/api/ServiceHistory", (req, res) => {
  try {
    const obj = req.body;
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db.bookService;
    data = data.filter((x) => x.email === obj.email);
    data = data.filter((x) => x.status !== "Remaining");
    //return only serviceId and status from the data
    data = data.map((x) => {
      x.date = new Date(x.date).toLocaleDateString('en-GB');
      return { serviceId: x.serviceId, date: x.date, time: x.time, finalPrice: x.finalPrice, status: x.status }
    })

    res.status(200).json(data);
  }
  catch (error) {
    console.log(error);
  }
})

// update date and time of the service
server.post("/api/RescheduleService", (req, res) => {
  try {
    const obj = req.body;
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db;

    if (data.bookService) {
      const reschedule = data.bookService.find(x => (x.email === obj.email && x.serviceId === obj.serviceId))
      reschedule.time = obj.time;
      reschedule.date = obj.date;
      fs.writeFile("./db.json", JSON.stringify(data), (err, result) => {
        if (err) {
          res.status(401).json({ error: err });
          return;
        }
        else {
          res.status(200).json({ message: "date and time updated", obj });
        }
      })
    }
    else {
      res.status(401).json({ error: "user not found" });
    }
  }
  catch (error) {
    console.log(error);
  }
})
server.post("/api/RescheduleService", (req, res) => {
  try {
    const obj = req.body;
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db;

    if (data.bookService) {
      const reschedule = data.bookService.find(x => (x.email === obj.email && x.serviceId === obj.serviceId))
      reschedule.time = obj.time;
      reschedule.date = obj.date;
      fs.writeFile("./db.json", JSON.stringify(data), (err, result) => {
        if (err) {
          res.status(401).json({ error: err });
          return;
        }
        else {
          res.status(200).json({ message: "date and time updated", obj });
        }
      })
    }
    else {
      res.status(401).json({ error: "user not found" });
    }
  }
  catch (error) {
    console.log(error);
  }
})

// cancel request for the service
server.post("/api/CancelRequest", (req, res) => {
  try {
    const obj = req.body;
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db;

    if (data.bookService) {
      const requestItem = data.bookService.find(x => (x.email === obj.email && x.serviceId === obj.serviceId))
      requestItem.status = "Cancelled";
      data.cancelRequest.push({ serviceId: obj.serviceId, reason: obj.reason });
      fs.writeFile("./db.json", JSON.stringify(data), (err, result) => {
        if (err) {
          res.status(401).json({ error: err });
          return;
        }
        else {
          res.status(200).json({ message: "Request cancelled Successfully.", obj });
        }
      })
    }
    else {
      res.status(401).json({ error: "user not found" });
    }
  }
  catch (error) {
    console.log(error);
  }
})

// get user details
server.post("/api/getCustomerDetails", (req, res) => {
  try {
    const obj = req.body;
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db;
    data = data.users.filter((x) => x.email === obj.email);
    const user = data[0];
    const userDetails = {
      firstName: user.firstName,
      lastName: user.lastName,
      mobileNumber: user.mobileNumber,
      language: user.preferredLanguage,
      date: user.dateOfBirth
    }
    res.status(200).json(userDetails);
  }
  catch (error) {
    console.log(error);
  }
})


server.post("/api/updateCustomerDetails", (req, res) => {
  try {
    const obj = req.body;
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db;
    let user = data.users.find(x => x.email === obj.email);
    if (user) {
      user.firstName = obj.firstName;
      user.lastName = obj.lastName;
      user.mobileNumber = obj.mobileNumber;
      user.dateOfBirth = obj.date;
      user.preferredLanguage = obj.language;

      fs.writeFile("./db.json", JSON.stringify(data), (err, result) => {
        if (err) {
          res.status(401).json({ error: err });
          return;
        }
        else {
          res.status(200).json({ message: "User details updated successfully.", obj });
        }
      })
    } else {
      res.status(401).json({ error: "user not found" });
    }
  }
  catch (error) {
    console.log(error);
  }
})

// check if old password is matching and update the password
server.post("/api/updatePassword", (req, res) => {
  try {
    const obj = req.body;
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db;
    let user = data.users.find(x => x.email === obj.email);
    if (user) {
      if (user.password === obj.oldPassword) {
        user.password = obj.newPassword;
        fs.writeFile("./db.json", JSON.stringify(data), (err, result) => {
          if (err) {
            res.status(401).json({ error: err });
            return;
          }
          else {
            res.status(200).json({ message: "Password updated successfully.", obj });
          }
        })
      }
      else {
        res.status(401).json({ error: "Old password is incorrect" });
      }
    }
    else {
      res.status(401).json({ error: "user not found" });
    }
  }
  catch (error) {
    console.log(error);
  }
})

//get all the addresses of user
server.post("/api/getAddresses", (req, res) => {
  try {
    const obj = req.body;
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db;
    data = data.users.filter((x) => x.email === obj.email);
    const user = data[0];
    const userAddresses = user.address;
    res.status(200).json({ address: userAddresses });
  }
  catch (error) {
    console.log(error);
  }
})

// delete an address of user
server.post("/api/deleteAddress", function (req, res) {
  try {
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db;
    const obj = req.body;
    const userObj = data.users.find((user) => user.email === obj.email);
    userObj.address.splice(obj.addressId - 1, 1)

    fs.writeFile("./db.json", JSON.stringify(data), (err, result) => {
      if (err) {
        res.status(401).json({ error: err });
        return;
      }
      else {
        res.status(200).json({ message: "deleted Successfully", userObj });
      }
    })
  }
  catch (error) {
    console.log(error);
  }
})

server.post("/api/updateAddress", (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db;
    const obj = req.body;
    const userObj = data.users.find((user) => user.email === obj.email);
    if (userObj) {
      const addressForUpdate = userObj.address.find((x) => x.addressId === obj.addressId);

      if (addressForUpdate) {
        addressForUpdate.streetName = obj.streetName;
        addressForUpdate.houseNumber = obj.houseNumber;
        addressForUpdate.zipCode = obj.zipCode;
        addressForUpdate.city = obj.city;
        addressForUpdate.mobilenumber = obj.mobilenumber;
        fs.writeFile("./db.json", JSON.stringify(data), (err, result) => {
          if (err) {
            res.status(401).json({ error: err });
            return;
          }
          else {
            res.status(200).json({ message: "address added", userObj });
          }
        })
      } else {
        console.log("coming here");
        delete obj.email
        obj.addressId = uuidv4();
        console.log(obj);
        if (!(userObj.hasOwnProperty('address'))) {
          userObj.address = [];
        }
        userObj.address.push(obj);
        fs.writeFile("./db.json", JSON.stringify(data), (err, result) => {
          if (err) {
            res.status(401).json({ error: err });
            return;
          }
          else {
            res.status(200).json({ message: "address added", userObj });
            return;
          }
        })
      }
    } else {
      console.log("user not found");
    }
  }
  catch (error) {
    console.log(error);
  }
})

// push ratings to the array
server.post("/api/addRating", (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = db;
    const obj = req.body;
    const userObj = data.users.find((user) => user.email === obj.email);
    if (userObj) {
      data.ratings.push(obj);
      fs.writeFile("./db.json", JSON.stringify(data), (err, result) => {
        if (err) {
          res.status(401).json({ error: err });
          return;
        }
        else {
          res.status(200).json({ message: "ratings added", userObj });
        }
      })
    } else {
      res.status(401).json({ error: "user not found" });
    }
  }
  catch (error) {
    console.log(error);
  }
})



server.use(router)


