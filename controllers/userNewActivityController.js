const User = require('../models/User')
const Activities = require('../models/Activities')
const User_Activities = require('../models/User_Activities')

const UserNewActivity = async (req, res) =>{
    const {name,description,activity,duration,date,user } = req.body
    // console.log(req.body)
    const saved = await User_Activities.create({
        name: name,
        description: description,
        activity_type: activity,
        date: date,
        duration: duration,
        user: user
    });
    if (saved != false ){
        res.status(202).json({'meessage':'activity saved successfully!'});
    } 
    else{ 
        res.status(409).json({'meessage':'activity save Failed!'});
    }
    
}

module.exports = UserNewActivity;
