import mongoose from 'mongoose';
const { Schema } = mongoose;

/**
 * Idealy, we would want status to be a integer denoting
 * the order status. Which is matched against a predifined
 * lookup table, i.e. an enum. Use string for now.
 * 
 * Per mongodb design, created date is accessible via
 * _id.getTimestamp()
 */
const OrderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    address: { type: String, required: true, trim: true },
    note: { type: String, required: true, trim: true },
    status: { type: String, required: true, trim: true },
    shipperId: { type: Schema.Types.ObjectId, required: true, ref: 'ShipperPartner' },
    paymentId: { type: Schema.Types.ObjectId, required: true, ref: 'Payment' }
});

/**
 * Note: Currently, OrderItem doesn't store item's price which
 * can be problematic if the price changes after payment.
 */
const OrderItemSchema = new Schema({
    orderId: { type: Schema.Types.ObjectId, required: true, ref: 'Order' },
    productId: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
    quantity: { type: Number, required: true, min: 1, validate: { validator: Number.isInteger, message: '{VALUE} is not an integer value' } }
});

exports.Order = mongoose.model("Order", OrderSchema);
exports.OrderItem = mongoose.model("OrderItem", OrderItemSchema);