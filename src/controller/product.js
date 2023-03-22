import product from "../models/product";

export const getAll = async (req, res) => {
  try {
    const products = await product.find();
    if (products.length === 0) {
      return res.status(400).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi hien thi",
    });
  }
};
export const Post = async (req, res) => {
  try {
    const products = await product.create(req.body);
    if (!products) {
      return res.status(400).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "tao thanh cong",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi hien thi",
    });
  }
};
export const Delete = async (req, res) => {
  try {
    const products = await product.findByIdAndDelete(req.params.id);
    if (!products) {
      return res.status(400).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "Xoa thanh cong",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi hien thi",
    });
  }
};
export const Patch = async (req, res) => {
  try {
    const products = await product.findByIdAndUpdate(req.params.id, req.body);
    if (!products) {
      return res.status(400).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "Cap nhat thanh cong",

      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi hien thi",
    });
  }
};
