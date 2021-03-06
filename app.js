const express = require("express");
const axios = require("axios");
const app = express();
app.get("/", (req, res) => {
  try {
    axios.get("https://dog.ceo/api/breed/samoyed/images/random")
      .then(response => {
        let html = `<html><body></body><img src='${response.data.message}'/></body></html>`;
        res.send(html);
      })
      .catch(err => res.send(err));
  } catch (err) {
    console.error("error", err);
  }
});
app.listen(process.env.PORT);
