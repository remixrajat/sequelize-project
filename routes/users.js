const express = require("express");
const router = express.Router();
const Usercontroller = require("../controllers/users");
router.get("/user/getUsers", Usercontroller.getUsers);
router.post("/user/createUser", Usercontroller.createUser);
router.post("/user/login", Usercontroller.userLogin);
router.get("/user/get", Usercontroller.getId);
router.put("/user/delete", Usercontroller.deleteUser);
router.get("/user/list/:page", Usercontroller.getPages);
module.exports = router;
