import mongoose from 'mongoose';
import validator from 'validator';


const User = mongoose.model('User', {
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)){
                //subject to change to a custom response later
                throw new Error('Invalid Email');
            }
        }
    },
    phone: {
        type: String,
        required: true,
        validate(value){
            if (value.length < 11 || value.length > 13){
                //subject to change to a custom response later
                throw new Error('Invalid Phone Number');
            }
        }
    },
    age: {
        type: Number,
        default: 0
    },
    gender: {
        type: String,
        enum: ['male', 'female']
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive']
        required: true,
        trim: true
    }
})

export default User;
