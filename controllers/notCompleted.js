const User_Activities = require('../models/User_Activities')
const mongoose = require('mongoose')

const NotCompleteUserActivity = async (req, res) =>{
    try{
    const { id } = req.body
    const valid = mongoose.isValidObjectId(id)
    if(valid){
        await User_Activities.updateOne({_id: id},{hasCompleted: false});
        res.status(202).json({'meessage':'activity is marked Not completed!'});
    }
    else{
        res.status(202).json({'meessage':'Please provide valid Id!'});
    }
    }
    catch(err){
        res.status(409).json({'meessage':'activity is not available!'});
    }
}
module.exports = NotCompleteUserActivity