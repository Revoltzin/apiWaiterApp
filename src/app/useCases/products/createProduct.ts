import type { Request, Response } from "express";

import { Product } from "../../models/Product.js";

export async function createProduct (req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename
    const { name, description, price , category, ingredients} = req.body

    if (!name || !description || !price) {
      return res.status(400).json({
        error: "Name, Description or price are required! "
      })
    }

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      ...(imagePath && { imagePath }),
})

    res.status(201).json(product)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
