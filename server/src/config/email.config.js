import nodemailer from "nodemailer"
import { env } from "./env.config.js"

const emailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.emailUser,
    pass: env.emailAppPassword,
  },
})

export default emailTransporter
