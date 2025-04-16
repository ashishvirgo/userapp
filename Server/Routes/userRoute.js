const express=require("express");
const router=express.Router();
const usercontroller=require("../controller/userController")
router.get("/users",usercontroller.getUsers);
router.get("/user/:email",usercontroller.getUser);
router.put("/edituser/:email",usercontroller.editUser);
router.post("/createuser",usercontroller.createUser);
router.post("/deleteuser",usercontroller.deleteUser);
module.exports=router;