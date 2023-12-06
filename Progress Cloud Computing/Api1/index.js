const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const serviceAccount = require("./google-services.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://capstone-f101b-default-rtdb.firebaseio.com",
  // Add other Firebase configurations here
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const userRecord = await admin.auth().createUser({
      email,
      password
    });
    res.status(201).json({ message: "User registered successfully", user: userRecord });
  } catch (error) {
    res.status(500).json({message: "", error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    res.status(201).json({ message: "Login successfully", user: userRecord });
  } catch (error) {
    res.status(400).send("Login failed");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
