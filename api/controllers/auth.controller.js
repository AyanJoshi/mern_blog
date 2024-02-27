import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

console.log("hmmmm");
export const signup = async (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || password=='' || email=='' || username=='') {
        return res.status(400).json({message: "All fields are required"});
    }

    const hashpass = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username, 
        email, 
        password: hashpass,
    });

    try {
        await newUser.save();
        res.json('Signup successful');
    } catch (error){
        res.status(500).json({message: error.message});
    }

    
};