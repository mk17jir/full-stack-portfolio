export const protectHealth = (req, res, next) => {
  const apiKey = req.headers["x-api-key"]

  if (!apiKey || apiKey !== process.env.HEALTH_API_KEY) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    })
  }

  next()
}
