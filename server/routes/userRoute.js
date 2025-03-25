const { addUser, userLogin, getUser } = require("../controllers/userController");

const authMiddleware2 = require("../middleware/authMiddleware2");

const router = require("express").Router();

router.post("/addUser", addUser);
router.post("/userLogin", userLogin);
router.get("/getUser", authMiddleware2, getUser);

module.exports = router;