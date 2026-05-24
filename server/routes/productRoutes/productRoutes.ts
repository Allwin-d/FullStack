import express, { Router } from "express";
import { getSingleProduct } from "../../controller/productController/productController";
import { getProducts } from "../../controller/productController/productController";

const router = express.Router();
router.get("/product", getProducts);
router.get("/products/:id", getSingleProduct);
export default router;
