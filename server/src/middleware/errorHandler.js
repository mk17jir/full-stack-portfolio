export const errorHandler = (error, req, res, _next) => {
  console.error(error)

  res.status(error.status || 500).json({
    success: false,
    message:
      error.message || "Something went wrong. Please try again later.",
  })
}
