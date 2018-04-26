import mongoose from 'mongoose';

const Product = mongoose.Schema({
  name: String,
  price: Number
});

export default mongoose.model('Product', Product);
