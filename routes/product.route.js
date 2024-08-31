import e from "express";
// import { Router as r } from "express";

// import Product from "../models/product.model";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const r = e.Router();

r.get("/", getProducts);
r.get("/:id", getProduct);
r.post("/", createProduct);
r.put("/:id", updateProduct);
r.delete("/:id", deleteProduct);

export default r;
