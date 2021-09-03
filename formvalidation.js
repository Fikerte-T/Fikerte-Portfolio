const email = document.querySelector('.email');
const form = document.querySelector('form');
const errorMsg = document.getElementById('errorMsg');
const pattern = /^([a-z0-9]+)@([a-z0-9]+)\.([a-z0-9]){2,4}$/;
let emailValue = email.value;
const submitBtn = document.querySelector('.submit-button');

function checkEmailValidity() {
	if(email.value === ''){
		errorMsg.innerText = 'Email can not be empty';
		email.classList.add('invalid-email');
		email.classList.remove('valid-email');
		return false;
	}
	else {
		errorMsg.innerText = '';
		email.classList.add('valid-email');
		email.classList.remove('invalid-email');
	}
	if(email.value !== email.value.toLowerCase()){
		
		errorMsg.innerText = "Email should be in lowercase";
		email.classList.add('invalid-email');
		email.classList.remove('valid-email');

		return false;
	}
	else {
		email.classList.add('valid-email');
		email.classList.remove('invalid-email');
		return true;
	}
		
}
email.addEventListener('input', checkEmailValidity);

submitBtn.addEventListener('click', (e) => {
	// alert('hello');
	e.preventDefault();
	if(checkEmailValidity()){
		submitBtn.submit();
	}
});

