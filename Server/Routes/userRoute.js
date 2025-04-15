const express=require("express");
const router=express.Router();
const usercontroller=require("../controller/userController")
router.get("/users",usercontroller.getUsers);
router.get("/user/:id",usercontroller.getUser);
module.exports=router;