
const mongoose = require('mongoose');
const Users = mongoose.model('users');
const restaurant_list = mongoose.model('restaurant_list');
const restaurant_cat = mongoose.model('restaurant_cat');

// const bcrypt=require('bcrypt');
// const jwt=require('jsonwebtoken');


const register=function(req,res){    
    Users.findOne({Email:req.body.email})
    .exec(function(err, UserData) {
    if (!UserData) {
        Users.create({
            Name:req.body.userName,
            Email:req.body.email,
            Password:req.body.password,
            
        },(err,userdata)=>{
            if(err){
            res.status(400).json(err);
            console.log(req);
            }
            else{
            res.status(200).json(userdata);
            }
        });
    } else{
        res 
        .status(202)
        .json({"message":"User already exist", data:null});    }
});
   

};
const get_restaurant=function(req,res)
{
    // return req.params.res_id;

    restaurant_cat.find().exec(
        function(err,Data){
            if(err){
                res
                .status(404)
                .json(err)
                return;
            }
            else{
                  
                res.status(200).json({'data':Data});

            }

        }
    );
}
const get_restaurant_list=function(req,res)
{
    restaurant_list.find().exec(
        function(err,Data){
            if(err){
                res
                .status(404)
                .json(err)
                return;
            }
            else{
                  
                res.status(200).json({'data':Data});

            }

        }
    );
}
module.exports=
{
    register,get_restaurant_list,get_restaurant
};
