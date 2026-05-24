import express, { Router } from "express";
import getProducts from "../../controller/productController/productController";

const router = express.Router();

router.get("/product", getProducts);

export default router;
