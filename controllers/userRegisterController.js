const User = require('../models/User')
const bcrypt = require('bcryptjs')
const handleNewUser = async (req, res) =>{
    const { fullname, email,phone,city,country, password} = req.body;
    if(!fullname || !email || !password) return res.status(400).json({'message': 'full name, email and password are required!'});
    const duplicate = await User.findOne({ email: email} ).exec();
    if (duplicate) return res.sendStatus(409);
    try {
        const hashed_Pwd = await bcrypt.hash(password,10);
        const result = await User.create({
            fullname: fullname,
            email: email,
            phone: phone,
            city: city,
            country: country,
            password: hashed_Pwd
        })
        console.log(result);

        // const new_user = new User();
        // new_user.fullname = fullname;
        // new_user.email = email;
        // new_user.password = password;
        // const results = await new_user.save();

        res.status(200).json({'message': `New user ${fullname} created!`});
    }catch(err){
        res.status(500).json({'message': err.message});
    }
}

module.exports = handleNewUser;