import dotenv from "dotenv"

dotenv.config()

const requiredEnv = [
  "EMAIL_USER",
  "EMAIL_APP_PASSWORD",
  "HEALTH_API_KEY",
]

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
}

export const env = {
  port: process.env.PORT || 5000,
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
  emailUser: process.env.EMAIL_USER,
  emailAppPassword: process.env.EMAIL_APP_PASSWORD,
  healthApiKey: process.env.HEALTH_API_KEY,
}
