export const contactDetails = (contactData: object) => {
    fetch("http://localhost:5000/api/PublicPages/SaveContactUsDetails", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contactData)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const Signup = (signupData: object) => {
    fetch("http://localhost:5000/api/Account/Register", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(signupData)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const Signin = (loginData: object) => {
    fetch("http://localhost:5000/api/Account/Login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })

}

export const ForgotPassword = async (email: string) => {
    const url = `http://localhost:5000/Signup?email=${email}`
    const response = await fetch(url, {
        method: "GET"
    })
    const data = await response.json()
    return data;
}