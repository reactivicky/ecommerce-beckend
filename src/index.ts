import express from "express";
import "dotenv/config.js";
import dbConnect from "./config/dbConnect.js";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello from serverside");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
  dbConnect();
});
