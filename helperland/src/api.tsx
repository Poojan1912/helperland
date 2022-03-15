import { Navigate } from "react-router-dom"

export const contactDetails = async (contactData: object) => {
    return fetch("http://localhost:5000/api/PublicPages/SaveContactUsDetails", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contactData)
    })
        .then()
        .catch(err => console.log(err))
}

export const Signup = (signupData: object) => {
    return fetch("http://localhost:5000/api/Account/Register", {
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
    return fetch("http://localhost:5000/api/Account/Login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const submitBooking = (data: object) => {
    return fetch("http://localhost:5000/api/BookService", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const authenticate = (data: object) => {
    if (typeof window !== undefined) {
        localStorage.setItem("jwt", JSON.stringify(data));
    }
}

export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt") || '{}')
    } else {
        return false
    }
}

export const ForgotPassword = async (email: string) => {
    const url = `http://localhost:5000/api/Account/SendForgotPasswordLink`
    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const sendNewPassword = async (password: string, token: string) => {
    const url = 'http://localhost:5000/api/Account/ResetPassword'
    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ password, token })
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const getPostalCode = async (postalCode: string) => {
    const url = `http://localhost:5000/api/Account/CheckPostalCode`
    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ postalCode })
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const logout = () => {
    if (typeof window === undefined) {
        return false;
    }
    if (localStorage.getItem("jwt")) {
        localStorage.removeItem("jwt")
    }
}
