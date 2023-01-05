const User_Activities = require('../models/User_Activities')

const DeleteUserActivity = async (req, res) =>{
    
        try{
            const {id} = req.body
         const result = await User_Activities.findOneAndDelete({_id: id})
            
            if(result){
                res.status(202).json({'meessage':'activity is Deleted Successfully!'});
            }
            else{
                res.status(202).json({'meessage':'activity is Deleted Successfully!'});
            }
    }
        catch (err){
            res.status(404).json({'meessage':`activity Not found!`});
        }
   
}
module.exports = DeleteUserActivity