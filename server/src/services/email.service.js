import emailTransporter from "../config/email.config.js"
import { env } from "../config/env.config.js"
import { escapeHtml } from "../utils/escapeHtml.js"

export const sendContactEmail = async ({ name, email, message }) => {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message)

  await emailTransporter.sendMail({
    from: env.emailUser,
    to: env.emailUser,
    replyTo: email,

    subject: `New portfolio message from ${name}`,

    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,

    html: `
      <!DOCTYPE html>
      <html>
        <body style="
          margin: 0;
          padding: 40px 20px;
          background: #f4f4f5;
          font-family: Arial, sans-serif;
        ">

          <div style="
            max-width: 600px;
            margin: auto;
            background: white;
            border-radius: 12px;
            overflow: hidden;
          ">

            <div style="
              padding: 24px 30px;
              background: #18181b;
              color: white;
              font-size: 22px;
              font-weight: bold;
            ">
              Mohamed Faisal <span style="color: #8b5cf6;">.</span>
            </div>

            <div style="padding: 32px 30px;">

              <h1 style="
                margin: 0 0 8px;
                color: #18181b;
                font-size: 24px;
              ">
                New portfolio message
              </h1>

              <p style="
                color: #71717a;
                margin-bottom: 30px;
              ">
                Someone contacted you through your portfolio.
              </p>

              <p>
                <strong>Name</strong><br />
                ${safeName}
              </p>

              <p>
                <strong>Email</strong><br />
                <a
                  href="mailto:${safeEmail}"
                  style="color: #7c3aed;"
                >
                  ${safeEmail}
                </a>
              </p>

              <div style="
                margin-top: 25px;
                padding: 18px;
                background: #fafafa;
                border-left: 4px solid #8b5cf6;
                border-radius: 6px;
              ">
                <strong>Message</strong>

                <p style="
                  margin-bottom: 0;
                  color: #3f3f46;
                  line-height: 1.7;
                  white-space: pre-line;
                ">
                  ${safeMessage}
                </p>
              </div>

              <p style="
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e4e4e7;
                color: #a1a1aa;
                font-size: 13px;
              ">
                Reply directly to this email to respond to ${safeName}.
              </p>

            </div>
          </div>

        </body>
      </html>
    `,
  })
}
