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

app.post("/tinder/cards/create", (req, res, next) => {
  try {
    const cards = new Cards({
      name: req.body.name,
      url: req.body.url,
    });
    cards.save();
    res.status(200).json({ message: "Carte créée" });
  } catch (err) {
    next(err);
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

app.post("/tinder/users/create", (req, res, next) => {
  try {
    const users = new Users({
      name: req.body.name,
      avatar: req.body.avatar,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      city: req.body.city,
    });

    users.save();
    res.status(200).json({ message: "Utilisateur créé" });
  } catch (err) {
    next(err);
  }
});

app.post("/tinder/users/update/:id", async (req, res, next) => {
  try {
    const update = {
      avatar: req.body.avatar,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      city: req.body.city,
    };

    await Users.findOneAndUpdate({ _id: req.params.id }, update);

    res.status(200).json({ message: "Utilisateur modifié" });
  } catch (err) {
    next(err);
  }
});

app.get("/tinder/users/:id", async (req, res, next) => {
  try {
    const user = await Users.findOne({ _id: req.params.id });
    if (!user) return next();

    const { ...rest } = user._doc;

    res.status(200).json(rest);
  } catch (err) {
    res.status(500);
    next(err);
  }
});

app.post("/tinder/users", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if (!user) return next();

    const validPassword = await Users.findOne({ password });
    if (!validPassword) return next();

    const { ...rest } = user._doc;

    res.status(200).json(rest);
  } catch (err) {
    res.status(500);
    next(err);
  }
});

//Listner
app.listen(port, () => console.log(`listning on localhost: ${port}`));
