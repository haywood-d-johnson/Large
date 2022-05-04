const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

// router.post("/test", (req, res) => {
//     const result = getCoordinates("706 N 58th st, Waco, Texas, 76710");
//     console.log(result);
// });

module.exports = router;
