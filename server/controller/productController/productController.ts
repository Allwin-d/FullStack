import { Request, Response } from "express";

const products = [
  {
    id: 1,
    lable: "Product 1 ",
  },
  { id: 2, lable: "Product 2 " },
  { id: 3, label: "Product 3 " },
];

const getProducts = (req: Request, res: Response) => {
  (res.setHeader("Content-Type", "text/plain"), res.send(res.json(products)));
};

export default getProducts;
