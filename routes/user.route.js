const express = require("express");

const router = express.Router();

const users = require("../data/user-data.json");

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:name", (req, res) => {
  const filterUser = users.filter((user) =>
    user.name.includes(req.params.name.split("-").join(" "))
  );
  res.json(filterUser);
});

module.exports = router;
