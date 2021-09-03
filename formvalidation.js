const email = document.querySelector('.email');
const errorMsg = document.getElementById('errorMsg');
const submitBtn = document.querySelector('.submit-button');

function checkEmailValidity() {
  if (email.value === '') {
    errorMsg.innerText = 'Email can not be empty';
    email.classList.add('invalid-email');
    email.classList.remove('valid-email');
    return false;
  } else {
    errorMsg.innerText = '';
    email.classList.add('valid-email');
    email.classList.remove('invalid-email');
  }
  if (email.value !== email.value.toLowerCase()) {
    errorMsg.innerText = 'Email should be in lowercase';
    email.classList.add('invalid-email');
    email.classList.remove('valid-email');
    return false;
  } else {
    email.classList.add('valid-email');
    email.classList.remove('invalid-email');
  }
}
email.addEventListener('input', checkEmailValidity);

submitBtn.addEventListener('click', (e) => {
  // alert('hello');
  e.preventDefault();
  if (checkEmailValidity()) {
    submitBtn.submit();
  }
});