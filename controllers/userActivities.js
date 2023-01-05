const User = require('../models/User')
const User_Activities = require('../models/User_Activities')

const UserActivities = async (req, res) =>{
    try{
    const { user } = req.body
    const result = await User_Activities.find({user:user}).populate('activity_type');
    res.status(202).json(result);
    }
    catch (err){
        res.status(404).json({'meessage':'activities are not availables'});
    }
}
module.exports = UserActivities