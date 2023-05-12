import mongoose from 'mongoose';
const { Schema } = mongoose;

const phoneRegEx = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/

const ShipperPartnerSchema = new Schema({
    name: { type: String, required: true, trim: true },
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
        validate: email => {
            return emailRegEx.test(email);
        },
        match: emailRegEx // https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
    }
})

exports.ShipperPartner = mongoose.model("ShipperPartner", ShipperPartnerSchema)