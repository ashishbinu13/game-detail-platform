const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const router = express.Router();

router.get("/getGames", async (req, res) => {
  const games = await fetch("https://www.freetogame.com/api/games");
  const json = await games.json();
  res.send(json);
});

module.exports = router;
