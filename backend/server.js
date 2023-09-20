// u18SawNUIIX872tV

import express from "express";
import mongoose from "mongoose";

import Cards from "./dbCards.js";
import Users from "./dbUsers.js";
import Cors from "cors";

//App Config
const app = express();
const port = process.env.PORT || 8001;

const connection_url =
  "mongodb+srv://admin:u18SawNUIIX872tV@cluster0.gxlai8p.mongodb.net/?retryWrites=true&w=majority";

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//API Endpoint
app.get("/", (req, res) =>
  res.status(200).send("Hey your port is working fine :)")
);

app.post("/tinder/cards/create", (req, res) => {
  try {
    const cards = new Cards({
      name: req.body.name,
      url: req.body.url,
    });
    cards.save();
    console.log(cards);
  } catch (err) {
    console.log(err);
  }
});
app.get("/tinder/cards", async (req, res) => {
  try {
    const cards = await Cards.find({});
    res.json(cards);

    console.log(cards);
  } catch (err) {
    console.log(err);
  }
});

app.post("/tinder/users/create", (req, res) => {
  try {
    const users = new Users({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      city: req.body.city,
    });
    users.save();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
});
app.post("/tinder/users", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if (!user) return console.log("utilisateur non trouvé");

    const validPassword = await Users.findOne({ password });
    if (!validPassword) return console.log("Mot de passe incorrect");

    const { ...rest } = user._doc;

    res.status(200).json(rest);
  } catch (err) {
    console.log(err);
  }
});

//Listner
app.listen(port, () => console.log(`listning on localhost: ${port}`));
