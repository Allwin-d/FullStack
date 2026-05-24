import { Request, Response } from "express";

const products = [
  {
    id: 1,
    label: "Product 1",
  },
  {
    id: 2,
    label: "Product 2",
  },
  {
    id: 3,
    label: "Product 3",
  },
];

const getProducts = (req: Request, res: Response) => {
  res.status(200).json(products);
};

const getSingleProduct = (req: Request, res: Response) => {
  console.log("Product Id :", req.params.id);

  const productId = Number(req.params.id);

  const product = products.find((item) => item.id === productId);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).setHeader("Content-Type", "text/plain");

    res.send(
      "Searched Product Id is not available. Try searching with a different Id.",
    );
  }
};

export { getProducts, getSingleProduct };
