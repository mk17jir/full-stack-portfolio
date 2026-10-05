import express from "express"
import cors from "cors"
import helmet from "helmet"
import { protectHealth } from "./middleware/protectHealth.js"
import contactRoutes from "./routes/contact.routes.js"
import { env } from "./config/env.config.js"
import { errorHandler } from "./middleware/errorHandler.js"
import { contactLimiter } from "./middleware/contactLimiter.js"

const app = express()

app.use(helmet())

app.use(
  cors({
    origin: env.clientUrl,
  })
)

app.use(express.json({ limit: "10kb" }))

app.get("/api/health", protectHealth, (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  })
})

app.use("/api/contact", contactLimiter, contactRoutes)

app.use(errorHandler)

app.listen(env.port, () => {
  console.log(`Server running on http://localhost:${env.port}`)
})
