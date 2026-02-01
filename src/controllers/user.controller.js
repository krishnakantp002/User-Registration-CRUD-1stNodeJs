const userModel = require('../model/user.model.js')

exports.createUser= (async(req,res)=>{
    try {
        const {name,email}=req.body;
        const result = await userModel.createUser(name,email);

    res.status(201).json({
        message : "user created successfully",
        result : result.insertId
    });
    } catch (error) {
        res.status(403).json({error:error.message});
    }

})

exports.getAllUsers= (async(req,res)=>{
    try {
        const result = await userModel.getAllUsers();
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({
           error : error.message
        })
    }

});

exports.getUserById= (async(req,res) => {
    try {
    const {id} = req.params;
    const result = await userModel.getUserById(id);
    if(!result){
        return res.status(404).json({
            message:"404 error user not found"
        })
    }
    
    res.status(200).json(result);
    
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

exports.updateUser= (async(req,res) => {
    try {
        const {id} = req.params;
        const{name,email} =req.body;
        console.log(req.body);
        if(!name || !email){
         return res.status(405).json({
                message : "Name and Email is required"
            });
        }
        const result = await userModel.updateUser(id,name,email);

        if (result.affectedRows === 0) {
            return res.status(404).json({
            message: "User not found"
        });
    }
        res.status(203).json(result);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
});

exports.deleteUser= (async (req,res) =>{
    try {
    const {id} = req.params;
    const result = await userModel.deleteUser(id);
    res.status(205).json(result);
        
    } catch (error) {
        res.status(503).json({error : error.message})
    }

})