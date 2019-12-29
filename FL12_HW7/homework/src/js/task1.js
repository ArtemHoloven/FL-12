try {
	const CANCELED_INPUT = 'Canceled';
	const WRONG_PASS = 'Wrong password';
	const MIN_EMAIL_LENGTH = 5;
	const MIN_PASS_LENGTH = 6;
	let validPasswordForThisEmail;

	const email = prompt('Enter your email');

	if (email === '' || email === null) {
		throw CANCELED_INPUT;
	} else if (email.length < MIN_EMAIL_LENGTH) {
		throw "I don't know any emails having name length less than 5 symbols";	
	} else if (email === 'user@gmail.com') {
		validPasswordForThisEmail = 'UserPass';
	} else if (email === 'admin@gmail.com') {
		validPasswordForThisEmail = 'AdminPass';
	} else {
		throw "I don't know you";
	}

	const password = prompt('Enter your password');

	if (password === '' || password === null) {
		throw CANCELED_INPUT;
	} else if (password !== validPasswordForThisEmail) {
		throw WRONG_PASS;
	}

	const shouldChangePassword = confirm('Do you want to change your password?');

	if (shouldChangePassword === false) {
		throw 'You have failed the change.';
	}

	const oldPassword = prompt('Enter old password');

	if (oldPassword === '' || oldPassword === null) {
		throw CANCELED_INPUT;
	} else if (oldPassword !== password) {
		throw WRONG_PASS;
	}

	const newPassword = prompt('Enter new password');
	
	if (newPassword === '' || newPassword === null) {
		throw CANCELED_INPUT;
	} else if (newPassword.length < MIN_PASS_LENGTH) {
		throw "It's too short password. Sorry.";
	}

	const confirmNewPassword = prompt('Enter new password again');
	
	if (confirmNewPassword === newPassword) {
		throw 'You have successfully changed your password.';
	} else if (confirmNewPassword === '' || confirmNewPassword === null) {
		throw CANCELED_INPUT;
	} else {
		throw 'You wrote the wrong password.';
	}

}	catch (e) {
		alert(e);
	}