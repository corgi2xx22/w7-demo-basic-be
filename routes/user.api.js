const express = require("express");

const router = express.Router();
const data = { a: "a" };
/* GET users. */
router.get("/", function (req, res, next) {
  console.log("here");
  // const queries = req.query;
  // console.log(queries);
  return res.status(200).send({ data });
});

/* GET users. */
router.get("/:id", function (req, res, next) {
  // const params = req.params;
  // console.log(params);
  return res.status(200).send({ data });
});
module.exports = router;
