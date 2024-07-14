const express = require("express");
const router = express.Router();
const authenticate = require("../../controllers/authenticate-user");

router.post("/", async (req, res) => {
  const user_credential = req.body;
  const response = await authenticate(user_credential);
  res.send(response);
});

module.exports = router;
