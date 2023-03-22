import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  desc: String,
  Status: Boolean,
});

export default mongoose.model("product", productSchema);
