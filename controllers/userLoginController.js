const User = require('../models/User')
const bcrypt = require('bcryptjs')

const loginUser = async (req, res)=>{
    const { email, password} = req.body;
    const findUser = await User.findOne({ email: email} ).exec();
    if (findUser != null ){
        const hashed_Pwd = findUser.password
        const compared_Pwd = await bcrypt.compare(password,hashed_Pwd);
        if (compared_Pwd){
            res.status(200).json({'message': `Login Succssfully!`,obj:findUser._id, name:findUser.fullname});
        }else{
            res.status(400).json({'message': 'Password is Incorrect!'});
        }
    }else{
        res.status(403).json({'message': 'User Not Found!'});
    }
}
module.exports = loginUser;