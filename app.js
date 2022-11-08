// Listen for blur event on form
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;
  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validatePassword() {
  const password = document.getElementById('password');
  const re = /^[a-zA-Z0-9]{8,16}$/;
  if (!re.test(password.value)) {
    password.classList.add('is-invalid');
  } else {
    password.classList.remove('is-invalid');
  }
}

function validateEmail() { }

function validatePhone() { }