import mongoose from 'mongoose';
const { Schema } = mongoose;

const CategorySchema = new Schema({
    name: { type: String, required: true, trim: true },
});

const CategoryTreeSchema = new Schema({
    parentId: { type: Schema.Types.ObjectId, ref: 'Category' },
    childId: { type: Schema.Types.ObjectId, ref: 'Category' },
});

exports.Category = mongoose.model('Category', CategorySchema);
exports.CategoryTree = mongoose.model('CategoryTree', CategoryTreeSchema);
