class InputValidator {
  
    // Method to validate email
    static validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return { isValid: false, message: "Invalid email address." };
      }
      return { isValid: true, message: "" };
    }
  
    // Method to validate username
    static validateUsername(username) {
      const usernameRegex = /^[a-z0-9]{4,20}$/i;
      if (!usernameRegex.test(username)) {
        return { isValid: false, message: "Username must be alphanumeric and between 4 and 20 characters long." };
      }
      return { isValid: true, message: "" };
    }
  
    // Method to validate title
    static validateTitle(title) {
      if (title.length <= 0 || title.length > 100) {
        return { isValid: false, message: "Title must be between 1 and 100 characters long." };
      }
      return { isValid: true, message: "" };
    }
  
    // Method to validate content
    static validateContent(content) {
      if (content.length <= 0 || content.length > 5000) {
        return { isValid: false, message: "Content must be between 1 and 5000 characters long." };
      }
      return { isValid: true, message: "" };
    }
  }
  