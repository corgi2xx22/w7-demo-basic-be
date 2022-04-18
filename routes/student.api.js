const data = {};
const express = require("express");
const router = express.Router();

/* GET students. */
router.get("/", function (req, res, next) {
  // const queries = req.query;
  // console.log(queries);
  // test error
  // try {
  //   const x = 3;
  //   x.map((e) => e);
  //   return res.status(200).send({ data });
  // } catch (error) {
  //   next(error);
  // }

  return res.status(200).send("students");
});

/* GET students. */
router.get("/:id", function (req, res, next) {
  // const params = req.params;
  // console.log(params);
  return res.status(200).send({ data });
});

module.exports = router;
