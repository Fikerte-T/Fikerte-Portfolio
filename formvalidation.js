const email = document.querySelector('.email');
const errorMsg = document.getElementById('errorMsg');
const submitBtn = document.querySelector('.submit-button');
let valid = 'false';

function checkEmailValidity() {
  if (email.value === '') {
    errorMsg.innerText = 'Email can not be empty';
    email.classList.add('invalid-email');
    email.classList.remove('valid-email');
  } else if (email.value !== email.value.toLowerCase()) {
    errorMsg.innerText = 'Email should be in lowercase';
    email.classList.add('invalid-email');
    email.classList.remove('valid-email');
  } else {
    errorMsg.innerText = '';
    email.classList.add('valid-email');
    email.classList.remove('invalid-email');
    valid = 'true';
  }
  return valid;
}
email.addEventListener('input', checkEmailValidity);

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (valid) {
    submitBtn.submit();
  }
});
