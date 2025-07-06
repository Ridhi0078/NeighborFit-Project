const jwt=require('jsonwebtoken');
const User=require('../models/user');
const bcrypt=require('bcryptjs');

const signToken=id=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

async function createUser(req,res){
    try{
        const body=req.body;
        if(!body || !body.email || !body.password || !body.name){
            return res.status(400).json({msg:"Name, email and password are required"});
        }

        const existingUser=await User.findOne({ email: body.email });
        if(existingUser){
            return res.status(409).json({ msg:" User already exists with this email"});
        }
        const hashedPassword=await bcrypt.hash(body.password,10);

        const user=await User.create({
            name:body.name,
            email: body.email,
            password: hashedPassword
        });

        const token=signToken(user._id)

        return res.status(201).json({ msg:"user created", token, data: user});
    }
    catch(err){
        console.error(err);
        return res.status(500).json({msg:"Error creating user", error: err.message});
    }
}

async function loginUser(req,res){
    try{
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({msg:"Email and password is required"});
        }

        const user=await User.findOne({ email });
        if(!user){
            return res.status(401).json({ msg: "Invalid email or password "});
        }

        const isMatch=await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({ msg:" Invalid email or password "});
        }

        const token=signToken(user._id);

        return res.status(200).json({
            msg:"Login successful",
            token,
            user:{
                id: user._id,
                name:user.name,
                email:user.email
            }
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({ msg: "login error", error: error.message});
    }
}

async function getAllUsers(req,res){
    const users=await User.find({});
    return res.json(users);
}

async function getUserById(req,res){
    const user=await User.findById(req.params.id);

    if(!user){
        return res.status(404).json({ msg:'User not found' });
    }
    return res.json(user);
}

async function deleteUserbyId(req,res){
    const result=await User.findByIdAndDelete(req.params.id);
    if(!result){
        return res.status(404).json({msg:'User not found'});
    }
    return res.json({msg:"User deleted Successfully"});
}

async function updatePreferences(req,res){
    const userId=req.params.id;
    const preferences=req.body;

    try{
        const updatedUser=await User.findByIdAndUpdate(
            userId,
            { preferences },
            { new: true }
        );

        if(!updatedUser){
            return res.status(404).json({ msg:"user not found "});
        }

        return res.json({
            msg: "Preferences updated successfully",
            preferences: updatedUser.preferences
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ msg: "Failed to update", error: err.message});
    }
}

module.exports={
    createUser,
    loginUser,
    getAllUsers,
    getUserById,
    deleteUserbyId,
    updatePreferences
}