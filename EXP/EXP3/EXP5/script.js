document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const phone = document.getElementById("phone");
  const successMessage = document.getElementById("success-message");

  const showError = (input, message) => {
    const formGroup = input.parentElement;
    const errorMsg = formGroup.querySelector(".error-message");
    errorMsg.textContent = message;
    input.classList.remove("valid");
    input.classList.add("invalid");
  };

  const showSuccess = (input) => {
    const formGroup = input.parentElement;
    const errorMsg = formGroup.querySelector(".error-message");
    errorMsg.textContent = "";
    input.classList.remove("invalid");
    input.classList.add("valid");
  };

  const checkName = () => {
    if (name.value.trim() === "") {
      showError(name, "Full Name is required");
      return false;
    }
    showSuccess(name);
    return true;
  };

  const checkEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value.trim())) {
      showError(email, "Enter a valid email");
      return false;
    }
    showSuccess(email);
    return true;
  };

  const checkPassword = () => {
    const value = password.value.trim();
    if (value.length < 8) {
      showError(password, "Password must be at least 8 characters");
      return false;
    }
    if (!/[!@#$%^&*]/.test(value)) {
      showError(password, "Include at least one special character");
      return false;
    }
    showSuccess(password);
    return true;
  };

  const checkPhone = () => {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(phone.value.trim())) {
      showError(phone, "Phone must be 10 digits");
      return false;
    }
    showSuccess(phone);
    return true;
  };

  // Real-time validation
  name.addEventListener("input", checkName);
  email.addEventListener("input", checkEmail);
  password.addEventListener("input", checkPassword);
  phone.addEventListener("input", checkPhone);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valid =
      checkName() && checkEmail() && checkPassword() && checkPhone();

    if (valid) {
      successMessage.textContent = "Registration Successful!";
      form.reset();
      [name, email, password, phone].forEach((input) =>
        input.classList.remove("valid")
      );
    } else {
      successMessage.textContent = "";
    }
  });
});
