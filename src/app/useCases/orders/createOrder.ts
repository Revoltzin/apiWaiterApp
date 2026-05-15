import type { Request, Response } from "express";

import { Order } from "../../models/Order.js";

export async function createOrder (req: Request, res: Response) {
  try {
    const { orderId } = req.params
    const { status } = req.body

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return res.status(400).json({
        error: "Status Should be one of these: WAITING, IN_PRODUCTION, DONE"
      })
    }

  } catch {
    res.sendStatus(500)
  }
}
