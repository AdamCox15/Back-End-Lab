const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];

app.get("/api/users", (req, res) => {
    res.status(200).send(friends);
  });

  app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });

  app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });

  app.post("/api/users", (req, res) => {
    console.log(req.body)
    friends.push(req.body.test)
    res.status(200).send(friends)
});

  // app.delete("/api/users", (req, res) => {
  //   let delName = req.query.users
  //   for (let i = 0; i < friends.length; i++) {
  //     if (delName) {
  //       console.log("Deleted user:" + delName)
  //       res.status(200).send("User deleted.")
  //     }
  //   }
  //   res.status(400).send("User not found.")
  // });



app.listen(4000, () => console.log('Sever is running on 4000'));