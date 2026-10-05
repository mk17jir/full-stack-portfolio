import { env } from "../config/env.config.js"

export const protectHealth = (req, res, next) => {
  const apiKey = req.headers["x-api-key"]

  if (!apiKey || apiKey !== env.healthApiKey) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    })
  }

  next()
}
