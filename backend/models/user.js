const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true,
        minlength:8,
    },
    email:{
        type:String,
        required: true,
        unique:true,
        lowercase: true,
    },
    preferences:{
        safety:Number,
        affordability:Number,
        public_transport:Number,
        walkability:Number,
        noise_level:Number,
        green_space:Number,
        internet_speed:Number,
        climate_score:Number
    }
}, {timestamps: true});

const User=mongoose.model("User",userSchema);

module.exports=User;









