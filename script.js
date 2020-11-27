

var form = document.getElementById('form');
var fName = document.getElementById('f-name');
var lname = document.getElementById('l-name');
var email = document.getElementById('email');
var password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fNameValue = fName.value.trim();
	const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	if(fNameValue === '') {
		setErrorFor(fName, 'First Name cannot be empty');
	} else {
		setSuccessFor(fName);
	}

    if (!isEmail(emailValue)) {
		setErrorFor(email, 'Looks like this is not an email');
	} else {
		setSuccessFor(email);
	}

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be empty');
	} else {
		setSuccessFor(password);
	}

	if(lnameValue === '') {
		setErrorFor(lname, 'Last Name cannot be empty');
	}else{
		setSuccessFor(lname);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className =  "form-control succes" ;
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
