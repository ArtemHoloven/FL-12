function isLeapYear(date) {
	let year = (new Date(date)).getFullYear();

	if ( isNaN(year) ) {
		return 'Invalid date';
	} else if ( 1600 <= year && 2400 >= year ) {
		if ( ( year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0 ) {
			return `${year} is a leap year`;
		} else {
			return `${year} is not a leap year`;
		}
	} else {
		if ( year % 4 === 0 ) {
			return `${year} is a leap year`;
		} else {
			return `${year} is not a leap year`;
		}
	}
}
isLeapYear('2020-05-03 20:10:05');