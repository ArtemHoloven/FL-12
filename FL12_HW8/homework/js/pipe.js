function pipe(num, ...args) {
	
	for (let func of args) {
		num = func(num);
	}
	return num;
}
function addTen(x) {
	return x+10;
}
function addTwenty(x) {
	return x+20;
}
pipe(5, addTen, addTwenty);