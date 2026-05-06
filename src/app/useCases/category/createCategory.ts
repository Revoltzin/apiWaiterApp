import type { Request, Response } from "express";

import { Category } from "../../models/Category.js";

export async function createCategory (req: Request, res: Response) {
  try {
    const { icon, name } = req.body

    if (!name) {
      return res.status(401).json({
        error: 'Name is required',
      })
    }

    const category = await Category.create({ icon, name })

    res.status(201).json(category)
  } catch {
    res.sendStatus(500)
  }
}
