const two = 2;
const five = 5;
const eight = 8;
const fifty = 50;
const year = 2019;
const thirty = 30;
const ten = 10;
const oneDayMSec = 86400000;
const actors = [
	{ name: 'tommy', age: 36 },
	{ name: 'lee', age: 28 }
];
const date = new Date(year, five, two);


function convert(...args) {
	let arr = [];
	for (let i = 0; i < args.length; i++) {
		const isNumber = Number.isFinite(args[i]);
		if (isNumber) {
			arr.push(String(args[i]));
		} else {
			arr.push(Number(args[i]));
		}
	}
	return arr;
}
convert('1', two, eight, '14');



function executeforEach(arr, fn) {
	for (let i = 0; i < arr.length; i++) {
		fn(arr[i]);
	}
}
executeforEach([two,five,eight], function(el) { 
	console.log(el * two);
});



function mapArray(arr, fn) {
    const result = [];
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(Number(arr[i]));
    }
    executeforEach(temp, function(el) {
		result.push(fn(el));
    });
    return result;
}
mapArray([two, '5', eight], function(el) { 
	return el + five;
});



function filterArray(arr, fn) {
    const result = [];
    executeforEach(arr, function(el) {
        if (fn(el)) {
            result.push(el);
        }
    });
    return result;
}
filterArray([two, five, eight], function(el) { 
	return el % two === 0;
});



function flipOver(str) {
	let result = '';
	let len = str.length;
	while (len--) {
		result += str[len];
	}
	return result;
}
flipOver('hey world');



function makeListFromRange(arr) {
	let result = [];
	let temp = arr[0];
	while (temp <= arr[1]) {
		result.push(temp);
		temp++;
	}
	return result;
}
makeListFromRange([two, fifty]);



function getArrayOfKeys(arr, key) {
	const result = [];
	executeforEach(arr, function(el) {
		result.push(el[key]);
	});
	return result;
}
getArrayOfKeys(actors, 'name');



function substitute(arr) {
	const result = [];
	mapArray(arr, function(el) {
		if (el < thirty) {
			result.push('*');
		} else {
			result.push(el);
		}
	});
   return result;
}
substitute([five, thirty, two, fifty, eight]);



function getPastDay(inputDate, days) {
	let temp = inputDate.getTime() - oneDayMSec * days;
	const result = new Date(temp).getDate();
	return result;
}
getPastDay(date, two);



function formatDate(inputDate) {
	let result = '';
	let temp = inputDate;
	let doubleTime = function(value) {
        if (value<ten) {
			return `0${value}`;
        } else {
			return value;
        }
    }
	result = `${temp.getFullYear()}/${temp.getMonth() + 1}/${temp.getDate()} ` +
				`${doubleTime(temp.getHours())}:${doubleTime(temp.getMinutes())}`;
	return result;
}
formatDate(new Date('6/15/2018 09:15:00'));