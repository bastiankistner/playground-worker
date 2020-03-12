const express = require("express");
const path = require("path");

module.exports = app => {
  // app.get("/hello", (req, res) => {
  // res.send("hello");
  // });
  // app.use('/worker', express.static(path.resolve(__dirname, '../public')))

  // Add br24-workers via express static
  app.use(
    `/worker/`,
    express.static(path.resolve(__dirname, "..", "public"), {
      maxAge: "0",
      setHeaders: res => {
        res.setHeader("Service-Worker-Allowed", "/");
      }
    })
  );
};
