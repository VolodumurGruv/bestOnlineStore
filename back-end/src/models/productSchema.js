import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  descr: { type: String, required: true },
  shortDescr: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  instock: { type: Boolean, required: true },
  countInStock: { type: Number, required: true },
  raiting: { type: Number, required: true },
  characteristics: {
    material: { type: String },
    filling: { type: String },
    sizes: { type: String },
    color: { type: String },
    ergonomics: { type: String },
    load: { type: String },
    functions: { type: String },
    additional: { type: String },
    care: { type: String }
  },
  numReviews: { type: Number, required: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
}, { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
