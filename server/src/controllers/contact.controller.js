import { sendContactEmail } from "../services/email.service.js";
import { validateContactForm } from "../utils/validation.js";

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, message, website } = req.body;
    if (website) {
      return res.status(400).json({
        success: false,
        message: "Unable to process your request.",
      });
    }
    const errors = validateContactForm({
      name,
      email,
      message,
    });

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: "Please check your information.",
        errors,
      });
    }

    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact controller error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send your message right now. Please try again later.",
    });
  }
};
