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
const port = 5000

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

  // fs.readFile('db.json', 'utf8', (err, data) => {
  //   if (err) throw err
  //   let db = JSON.parse(data)
  //   let newContact = req.body
  //   var data = db;
  //   data.ContactUs.push(newContact)
  //   fs.writeFile('./db.json', JSON.stringify(data), 'utf8', (err) => {
  //     if (err) throw err
  //     res.json(newContact)
  //   })
  // })
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
        res.status(200).json({ token: token, email: obj.email, message: "Login Successful." });
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


server.use(router)


