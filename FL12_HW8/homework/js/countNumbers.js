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

function countNumbers(stringNumbers) {
    let digits = makeNumber(stringNumbers);
    let result = {};
    for (let number of digits) {
        result[number] = result[number] ? result[number] + 1 : 1;
    }
    return result;
}
countNumbers('4235gsdf453h90ga0230');