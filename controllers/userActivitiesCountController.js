const User = require('../models/User')
const Activities = require('../models/Activities')
const User_Activities = require('../models/User_Activities')

const UserActivitiesCount = async (req, res) =>{
    try{
        const activities_count = []
    const {id } = req.body
        const activities =  await Activities.find({})
            const promises = activities.map(activity => User_Activities.find({user:id,activity_type:{_id:activity._id.valueOf()}}).count()) 
            const ActivitiesInfo = await Promise.all(promises)
            activities.map((activity,index) => 
            activities_count.push({activity:activity.src,count:ActivitiesInfo[index]})
            ) 
        res.status(202).json(activities_count)
    }catch(err){
        console.log(err)
        // res.status(400).json(err.message)
        res.status(404).json({'meessage':'activities are not counted.'});

    }
}

module.exports = UserActivitiesCount;
