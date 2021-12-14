const mongoose = require("mongoose");
const Validate = require("../../../helpers/validate");
const User = require("../../../models/user");
const JWT = require("jsonwebtoken");
module.exports.handleUserSignUp = async (req, res, next) => {
    const { validate, error } = Validate.validateSignUpData(req.body);
    if (!validate) {
        return res.status(400).json({ error: error })
    } else {
        const { email, password, displayName} = req.body;
        try {
            const foundedUser = await User.findOne({ email });
            if (foundedUser){
                return res.status(400).json({error: "Email da duoc su dung !"});
            } else{
                const newUser = new User({
                    email,
                    password,
                    displayName
                });
                await newUser.save();
                return res.status(200).json({
                    message: "Dang ky thanh cong !",
                    newUser,
                });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send("Something went wrong !");
        }
    }
};

module.exports.handleUserLogin = async (req,res, next) =>{
    const {validate, error} = Validate.validateSignInData(req.body);
    if(!validate){
        return res.status(400).json({error});
    }else{
        const {email, password} = req.body;
        try {
            const foundedUser = await User.findOne({email});
            if(!foundedUser){
                return res.status(400).json({error: "Tai khoan khong ton tai !"});
            } else if(password != foundedUser.password){
                return res.status(400).json({error: "Email hoac mat khau khong dung !"});
            }else {
                const payload = {
                    userId: foundedUser._id,
                    email: foundedUser.email,
                    displayName: foundedUser.displayName,
                };
                JWT.sign(
                    payload,
                    "DiaLy",
                    {expiresIn:"1h"},
                    (err, accessToken) => {
                        if(!err){
                            return res.status(200).json({
                                message: "Dang nhap thanh cong !",
                                accessToken: accessToken,
                            });
                        }
                    }
                );
            };
        } catch (error) {
            console.log(error);
            return res.status(500).send("Something went wrong !")
        }
    }
}