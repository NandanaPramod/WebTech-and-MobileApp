// script.js - global utilities + validations + AJAX handlers
document.addEventListener('DOMContentLoaded', () => {
  // generic registration validation (used in register.html)
  window.validateRegistration = function() {
    const name = document.getElementById('fullname')?.value.trim();
    const pwd = document.getElementById('regPassword')?.value;
    const email = document.getElementById('regEmail')?.value;
    const phone = document.getElementById('phone')?.value;
    // name alphabets + min 6
    const nameRegex = /^[A-Za-z\s]{6,}$/;
    if (!nameRegex.test(name)) {
      alert("Name must contain only alphabets and minimum 6 characters.");
      return false;
    }
    if (pwd.length < 6) {
      alert("Password must be at least 6 characters.");
      return false;
    }
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid email address (e.g., name@domain.com).");
      return false;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
      return false;
    }
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      alert("Select gender.");
      return false;
    }
    const category = document.getElementById('serviceCat')?.value;
    if (!category) {
      alert("Select a service category.");
      return false;
    }
    const address = document.getElementById('address')?.value.trim();
    if (address === "") {
      alert("Address cannot be empty.");
      return false;
    }
    alert("Registration successful! Welcome to NexusForge.");
    return true;
  };

  // login dummy validation
  window.validateLogin = function() {
    const user = document.getElementById('loginUser')?.value.trim();
    const pwd = document.getElementById('loginPass')?.value;
    if(user === "" || pwd === "") { alert("Enter credentials"); return false; }
    alert(`Welcome back ${user}`);
    return true;
  };

  // Contact validation similar
  window.validateContact = function() {
    const name = document.getElementById('contName')?.value.trim();
    const email = document.getElementById('contEmail')?.value;
    const phone = document.getElementById('contPhone')?.value;
    const msg = document.getElementById('contMsg')?.value;
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!nameRegex.test(name)) { alert("Valid name (min 3 letters)"); return false; }
    if (!/^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(email)) { alert("Valid email required"); return false; }
    if (!/^\d{10}$/.test(phone)) { alert("10-digit phone required"); return false; }
    if(msg === "") { alert("Message can't be empty"); return false; }
    alert("Inquiry sent! Our team will reach out.");
    return true;
  };
});
