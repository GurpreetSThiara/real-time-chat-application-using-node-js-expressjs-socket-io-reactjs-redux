import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json())


await connectDB();

app.get("/user", userRoute);
app.get("/", (req, res) => {
  res.send("Hello from Node.js");
});

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});
