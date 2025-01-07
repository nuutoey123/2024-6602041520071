const axios = require("axios");
const API_URL = "http://192.168.187.67:8080/api/auth/local/register";
const API_TOKEN = "Bearer 9107bc1dffdf83821814089102d6f76a6dc2977ecb9259fbcd7bdc41b6c52713575e2c8816502815a443372715a39eed9c5440bdc0fba93cb3eae2795be332d3db2789828a489ff62a8ada962f1f2ed1d5e76787d161a56f66890c0f93dbbd6368e30b784920addd4a465d8c920cd1ec13ff0ee111cab7a9757376905b5e63e0";

const payload = {
username : "thanachai",
email : "nuutoey123@gmail.com",
password : "0943301218Za.",

};

axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("Send Api Success", response.data);
  })
  .catch((err) => {
    console.log("Send Error", err.message);
  });
