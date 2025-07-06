const express=require('express');
const isLoggedIn=require("./../middlewares/isLoggedIn");
const {
    createUser,
    loginUser,
    getAllUsers,
    getUserById,
    deleteUserbyId,
    updatePreferences
}=require('../controllers/user');
const router=express.Router();

router.post("/", createUser);
router.post("/login",loginUser);
router.get("/",getAllUsers);
router.get("/:id",getUserById);
router.delete("/:id",deleteUserbyId);
router.post("/:id/preferences",isLoggedIn,updatePreferences);

module.exports=router;