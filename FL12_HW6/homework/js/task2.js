try {
	const INVALID_INPUT_MESSAGE_ONE = 'Input values should be ONLY integer numbers';
	const INVALID_INPUT_MESSAGE_TWO = 'A triangle must have 3 sides with a positive definite length';

	let a = prompt('Input number "a" for triangle sides length');
	a = a.trim();
	if (a === '') {
		throw INVALID_INPUT_MESSAGE_ONE;
	}
	a = Number(a);
	if (isNaN(a) || parseInt(a) !== a) {
		throw INVALID_INPUT_MESSAGE_ONE;
	} else if (a <= 0) {
		throw INVALID_INPUT_MESSAGE_TWO;
	}

	let b = prompt('Input number "b" for triangle sides length');
	b = b.trim();
	if (b === '') {
		throw INVALID_INPUT_MESSAGE_ONE;
	}
	b = Number(b);
	if (isNaN(b) || parseInt(b) !== b) {
		throw INVALID_INPUT_MESSAGE_ONE;
	} else if (b <= 0) {
		throw INVALID_INPUT_MESSAGE_TWO;
	}

	let c = prompt('Input number "c" for triangle sides length');
	c = c.trim();
	if (c === '') {
		throw INVALID_INPUT_MESSAGE_ONE;
	}
	c = Number(c);
	if (isNaN(c) || parseInt(c) !== c) {
		throw INVALID_INPUT_MESSAGE_ONE;
	} else if (c <= 0) {
		throw INVALID_INPUT_MESSAGE_TWO;
	}

	if ( a >= b + c || b >= a + c || c >= a + b ) {
		console.log('Triangle doesn’t exist');
	} else if ( a === b && b === c ) {
		console.log('Equilateral triangle');
	} else if ( a === b || a === c || b === c ) {
		console.log('Isosceles triangle');
	} else {
		console.log('Scalene triangle');
	}

} catch(e) {
	alert(e);
}
