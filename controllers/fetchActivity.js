const User_Activities = require('../models/User_Activities')

const FetchUserActivity = async (req, res) =>{
    
        try{
            const {id} = req.body
         const result = await User_Activities.findOne({_id: id})
            
            if(result){
                res.status(200).json(result);
            }
            else{
                res.status(202).json({'meessage':'activity Not Find!'});
            }
    }
        catch (err){
            res.status(404).json({'meessage':`activity Not found!`});
        }
   
}
module.exports = FetchUserActivity