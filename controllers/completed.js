const User_Activities = require('../models/User_Activities')

const CompleteUserActivity = async (req, res) =>{
    try{
    const { id } = req.body
    const result = await User_Activities.updateOne({_id: id},{hasCompleted: true});
        res.status(202).json({'meessage':'activity is marked completed!'});
    }
    catch(err){
        res.status(409).json({'meessage':'activity is not available!'});
    }
}
module.exports = CompleteUserActivity