
import express from "express";

import dotenv  from "dotenv"
dotenv.config()

const app = express();

// app.use("/", (req, res) => {
//   res.json({ message: "Hello Vercel" });
// });

app.get("/", (req, res) => {
  res.json({ message: "Home Page" });
});

app.get("/login", (req, res) => {
  res.json({ message: "Login Page" });
});

app.get("/register", (req, res) => {
  res.json({ message: "Register Page" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port ${process.env.PORT}`);
});
