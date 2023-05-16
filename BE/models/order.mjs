import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    address: { type: String, required: true, trim: true },
    note: { type: String, required: true, trim: true },
    status: {
        type: String,
        required: true,
        enum: [
            'Processing',
            'Confirm',
            'Packaging',
            'Delivering',
            'Delivered',
            'Canceled',
        ],
        default: 'Processing',
    },
    shipperId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'ShipperPartner',
    },
    paymentId: { type: Schema.Types.ObjectId, required: true, ref: 'Payment' },
});

/**
 * Note: Currently, OrderItem doesn't store item's price which
 * can be problematic if the price changes after payment.
 */
const OrderItemSchema = new Schema({
    orderId: { type: Schema.Types.ObjectId, required: true, ref: 'Order' },
    productId: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value',
        },
    },
});

exports.Order = mongoose.model('Order', OrderSchema);
exports.OrderItem = mongoose.model('OrderItem', OrderItemSchema);
