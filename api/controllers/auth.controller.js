import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/err.js";

console.log("hmmmm");
export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || password=='' || email=='' || username=='') {
        next(errorHandler(400, 'All fields are required'));
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
        next(error);
    }
};