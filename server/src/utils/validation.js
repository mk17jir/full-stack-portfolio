export const validateContactForm = ({ name, email, message }) => {
  const errors = {}

  if (!name || !name.trim()) {
    errors.name = "Name is required."
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters."
  } else if (name.trim().length > 50) {
    errors.name = "Name must be less than 50 characters."
  }

  if (!email || !email.trim()) {
    errors.email = "Email is required."
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email.trim())) {
      errors.email = "Please provide a valid email address."
    }
  }

  if (!message || !message.trim()) {
    errors.message = "Message is required."
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters."
  } else if (message.trim().length > 2000) {
    errors.message = "Message must be less than 2000 characters."
  }

  return errors
}
