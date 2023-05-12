import mongoose from 'mongoose';
const { Schema } = mongoose;

const phoneRegEx = /^\d+$/
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true }, // TODO: write validator
    password: { type: String, required: true }, // TODO: write validator and hash
    type: { type: String, required: true }, // Should be an enum
    phone: {
        type: String,
        required: true,
        validate: phone => {
            return phoneRegEx.test(phone);
        },
        match: phoneRegEx // https://stackoverflow.com/questions/66383516/add-mongoose-validation-for-phone-numbers
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: email => {
            return emailRegEx.test(email);
        },
        match: emailRegEx // https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
    },
    address: { type: String, required: true, trim: true }
});

export default mongoose.model("User", UserSchema);