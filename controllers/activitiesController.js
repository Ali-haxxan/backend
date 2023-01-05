const Activities = require('../models/Activities')
const activities = async (req, res) =>{
    const result = await Activities.find({});
    if (result != null ){
        res.status(202).json(result);
    } 
    else{ 
        res.status(409).json({'meessage':'activities are not availables'});
    }
    
}

module.exports = activities;