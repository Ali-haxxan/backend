const User_Activities = require('../models/User_Activities')

const EditUserActivity = async (req, res) =>{
    try{
    const {name,description,activity,duration,date,id } = req.body
    
     const result = await User_Activities.findByIdAndUpdate(id,{
        name: name,
        description: description,
        activity_type: activity,
        date: date,
        duration: duration
    })
    if(result){
        res.status(200).json({'meessage':`activity Updated Successfully!`});
    }
    }catch (err){
        console.log(err);
        res.status(404).json({'meessage':`activity Not found!`});
    }
}
module.exports = EditUserActivity