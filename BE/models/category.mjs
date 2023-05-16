import mongoose from 'mongoose';
const { Schema } = mongoose;

const CategorySchema = new Schema({
    name: { type: String, required: true, trim: true },
});

const CategoryTreeSchema = new Schema({
    parentId: { type: Schema.Types.ObjectId, ref: 'Category' },
    childId: { type: Schema.Types.ObjectId, ref: 'Category' },
});
CategoryTreeSchema.index(
    { parentId: 1, childId: 1 },
    { unique: true, dropDups: true }
);

const Category = mongoose.model('Category', CategorySchema);
const CategoryTreeModel = mongoose.model('CategoryTree', CategoryTreeSchema);

export default Category;
export const CategoryTree = CategoryTreeModel;
