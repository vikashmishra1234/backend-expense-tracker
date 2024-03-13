const User = require('../models/signUp');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { create } = require('../models/Expense');

let secretKey = 'vikashmishra123';
exports.SignUp = async(req,res)=>{
    try {
        const exits = await User.findOne({Email:req.body.Email});
       
        if(exits){
            return res.status(200).json({success:false,error:'user already exits'});
        }
        const salt =  bcrypt.genSaltSync(10);
        const hashPass =  bcrypt.hashSync(req.body.Password,salt);
        const newUser = await User.create({
            Name:req.body.Name,
            Email:req.body.Email,
            Password:hashPass
        });
        const data = {
            id:newUser._id,
            name:newUser.name
        }
        const token = await jwt.sign({ data }, secretKey,{expiresIn:"2h"});
        return res.status(200).json({success:true,user:newUser,message:'SignUp successfull',token:token});
    } catch (error) {
        return res.status(200).json({success:false,error:error.message});

    }
}

exports.userLogin=async(req,res)=>{
    try {
        const exits = await User.findOne({Email:req.body.Email});
        if(!exits){
            return res.status(200).json({success:false,error:'Please SignUp'});
        }
        const passCompare = bcrypt.compareSync(req.body.Password,exits.Password);
        if(!passCompare){
            return res.status(200).json({success:false,error:'Invalid Password'});
        }
        const data = {
            id:exits._id,
            name:exits.Name
        }
        const token = await jwt.sign({ data }, secretKey,{expiresIn:"2h"});
        return res.status(200).json({success:true,user:exits,message:'Login successfull',token:token});


    } catch (error) {
        return res.status(500).json({success:false,error:error.message});
    }
}

