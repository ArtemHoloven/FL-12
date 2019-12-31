function getMin(...args) {
	let min = Infinity;
	for (let i = 0; i < args.length; i++) {
		if (min > args[i]) {
			min = args[i];
		}
	}
	return min;
}
getMin(2, -3, 12, 0, -25, 57);