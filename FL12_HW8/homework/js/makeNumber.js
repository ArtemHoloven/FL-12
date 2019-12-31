function makeNumber(String) {
    let result = '';
    for (let symbol of String) {
    	let number = parseInt(symbol);
        if (!isNaN(number)) {
            result += number;
        }
    }
    return result;
}
makeNumber('gfas86fn345bb2930fv43f');