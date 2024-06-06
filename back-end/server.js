import express from "express";
import User from "./models.js";

import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome");
});

app.post("/signup", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    console.log("Request Body:", req.body);

    // Creating the user
    const userData = await User.create({ username, email, password });

    // Sending the response
    res.status(201).send(userData);
  } catch (error) {
    // Handling errors
    console.error(error);
    res.status(500).send({ error: "Something went wrong" });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening to port on ${PORT}`);
});
