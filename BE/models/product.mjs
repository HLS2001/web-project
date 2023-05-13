import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: { type: String, required: true, trim: true },
    price: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value',
        },
    },
    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value',
        },
    },
    descirption: { type: String, trim: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
});

exports.Product = mongoose.model('Product', ProductSchema);
