try {
	const INVALID_INPUT_MESSAGE = 'Invalid input data';

	let a = prompt('Input value "a" for quadratic equation (ax^2 + bx + c = 0)');
	a = a.trim();
	if (a === '') {
		throw INVALID_INPUT_MESSAGE;
	}
	a = Number(a);
	if (isNaN(a) || a === 0 || parseInt(a) !== a) {
		throw INVALID_INPUT_MESSAGE;
	}

	let b = prompt('Input value "b" for quadratic equation (ax^2 + bx + c = 0)');
	b = b.trim();
	if (b === '') {
		throw INVALID_INPUT_MESSAGE;
	}
	b = Number(b);
	if (isNaN(b) || parseInt(b) !== b) {
		throw INVALID_INPUT_MESSAGE;
	}

	let c = prompt('Input value "c" for quadratic equation (ax^2 + bx + c = 0)');
	c = c.trim();
	if (c === '') {
		throw INVALID_INPUT_MESSAGE;
	}
	c = Number(c);
	if (isNaN(c) || parseInt(c) !== c) {
		throw INVALID_INPUT_MESSAGE;
	}

	const TWO = 2;
	const FOUR = 4;
	let D = Math.pow( b , TWO ) - FOUR * a * c;
	if ( D === 0 ) {
		const X = -b / ( TWO * a );
		console.log('x = ' + Math.round(X));
	} else if ( D < 0 ) {
		console.log('no solution');
	} else if ( D > 0 ) {
		const X1 = ( -b + Math.sqrt(D) ) / ( TWO * a );
		const X2 = ( -b - Math.sqrt(D) ) / ( TWO * a );
		console.log('x1 = ' + Math.round(X1));
		console.log('x2 = ' + Math.round(X2));
	}

} catch(e) {
	alert(e);
}
