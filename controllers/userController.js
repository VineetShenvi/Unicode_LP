const User = require('../models/userModel');

//signup
const signup = async(req,res) =>
{
    try{
        const {username , mobile ,email , password } = req.body;

        const user = new User({ username , mobile , email, password});
        await user.save();

        res.status(201).json({message : 'registration is  successfull'});
    }
    catch(error){
        res.status(500).json({ error :'Internal server error'});
    }
    };

    //login
    const login = async (req,res) => {
        try{
            const {email,password} = req.body;
            
            const user = await User.findOne({email});

            if(!user){
                return res.status(401).json({error:'login in failed'});
            }
            if(password!==user.password){
                return res.status(401).json({error : 'incorrect password'});
            }
            res.status(200).json({message:'login successful'});
        }catch(error){
            res.status(500).json({ error :error.message});
        }

    };

    module.exports = {
        signup,
        login
    };