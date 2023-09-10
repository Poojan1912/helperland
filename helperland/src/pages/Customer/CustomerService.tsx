export const serviceRequests = (email: string) => {
  return fetch("http://localhost:5000/api/CustomerDashboard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const serviceHistory = (email: string) => {
  return fetch("http://localhost:5000/api/ServiceHistory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const reschuduleService = (obj: object) => {
  return fetch("http://localhost:5000/api/RescheduleService", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const cancelService = (obj: object) => {
  return fetch("http://localhost:5000/api/CancelRequest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const getUserDetails = (email: string) => {
  return fetch("http://localhost:5000/api/getCustomerDetails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const updateUserDetails = (obj: object) => {
  return fetch("http://localhost:5000/api/updateCustomerDetails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const updatePassword = (obj: object) => {
  return fetch("http://localhost:5000/api/updatePassword", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const getAddresses = (obj: object) => {
  return fetch("http://localhost:5000/api/getAddresses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const deleteAddressData = (email: string, addressId: string) => {
  return fetch("http://localhost:5000/api/deleteAddress", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, addressId }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const updateAddress = (obj: object) => {
  return fetch("http://localhost:5000/api/updateAddress", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const submitProviderRatings = (obj: object) => {
  return fetch("http://localhost:5000/api/addRating", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
