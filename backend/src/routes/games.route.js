const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const router = express.Router();
const API_URL = "https://www.freetogame.com/api";

router.get("/getGames", async (req, res) => {
  const games = await fetch(`${API_URL}/games`);
  const json = await games.json();
  res.send(json);
});

router.post("/searchGames", async (req, res) => {
  const searchKey = req.body.searchKey;
  const type = req.body.type;
  const games = await fetch(`${API_URL}/games?${type}=${searchKey}`);
  const json = await games.json();
  console.log(json);
});

module.exports = router;
