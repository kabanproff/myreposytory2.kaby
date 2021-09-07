// // function isEmpty() {
// // 	for (let k in o) {
// // 		return 'есть';
// // 	}
// // 	return 'Нет';
// // }

// // let o = {};
// // o.w = 3;

// // alert(isEmpty(o));


// // let userName;

// // console.log(typeof userName);
// // console.log('userName');

// // if (userName === undefined) {
// // 	console.log('Переменная Не определена');
// // } else {
// // 	console.log('Переменная определена');
// // }

// // if (typeof userName === 'undefined') {
// // 	console.log('Переменная Не определена');
// // } else {
// // 	console.log('Переменная определена');
// // }

// // let userName = null;
// // console.log(userName);

// // let block = document.querySelector('.block');
// // console.log(block);

// // console.log(typeof block);

// // let userName = 'me';
// // console.log(typeof userName);
// // let userAge = 34;
// // let userAgeInfo = `Возраст: ${userAge}`;
// // console.log(userAgeInfo);
// // let us = '33' / '4';
// // console.log(typeof us);

// // let name;
// // console.log(name ?? 'ff');
// // console.log('35' + - '22');
// // console.log('35' * '22');
// // console.log('556' > '22++');
// // console.log(!false && 11 || 18 && !'');
// // name = 0;
// // console.log(name ?? 'ff');
// // let message = 'Привет';
// // let messageEnd;

// // if (5 > 50) {
// // 	massageEnd = ', Вася!';
// // } else if (5 > 30) {
// // 	messageEnd = ', Оля!';
// // } else if (5 > 10) {
// // 	messageEnd = ', Миша!';
// // } else if (5 > 11) {
// // 	messageEnd = ', Андрей!';
// // } else {
// // 	messageEnd = ', Ирнокентий!';
// // }

// // message += messageEnd;
// // console.log(message);
// // console.log(messageEnd);

// // for (let f = 0; f < 5; ++f) {
// // 	console.log(f);
// // }
// // let g = 0;
// // do {
// // 	console.log(++g);
// // } while (g < 5);

// // let num = 0;
// // for (; num < 5; num++) {
// // 	console.log(num);
// // 	if (num == 3) break;
// // }
// // console.log(`работа окончена num = ${num}`);

// // let gol = 0;
// // for (; gol < 5; gol++) {
// // 	if (gol == 2) continue;
// // 	console.log(gol);


// // showMessage();

// // function showMessage() {
// // 	console.log('hi');
// // };

// // showMessage();

// // function getSumm() {
// // 	let numOne, numTwo;
// // 	function getNumOne() {
// // 		numOne = 1;
// // 	}
// // 	function getNumTwo() {
// // 		numTwo = 2;
// // 	}
// // 	getNumOne();
// // 	getNumTwo();

// // 	let nunSumm = numOne + numTwo;
// // 	console.log(nunSumm);
// // }
// // getSumm();
// // getNumOne();

// // function calcSumm(numOne, numTwo) {
// // 	console.log(`Переменная numOne:${numOne}`);
// // 	console.log(`Переменная numTwo:${numTwo}`);

// // 	let numSumm = numOne + numTwo;
// // 	console.log(`Сумма:${numSumm}`);
// // }

// // function getMessage(text, name) {
// // 	console.log(`${text} ${name}`);
// // 	setTimeout(getMessage, 5000, text, name);
// // };

// // function showNumber(num) {
// // 	console.log(num);
// // 	if (num < 5) {
// // 		setTimeout(showNumber, 1000, ++num);
// // 	}
// // };
// // function showNumber1(num) {
// // 	console.log(num);
// // 	let timeId = setTimeout(showNumber1, 1000, ++num);
// // 	if (num > 10) {
// // 		clearTimeout(timeId);
// // 	}
// // }
// // setTimeout(showNumber1, 1000, 1);

// // let ver = 0;
// // function showNumber(num) {
// // 	ver += num;
// // 	console.log(ver);
// // 	if (ver >= 10) {
// // 		clearInterval(timeId);
// // 	}
// // }

// // let timeId = setInterval(showNumber, 1000, 1);

// // function createMessage(text, name) {
// // 	return `${text}, ${name}`;
// // }

// // function showMessage(message) {
// // 	console.log(message);
// // }

// // function initMessage(text, name) {
// // 	showMessage(createMessage(text, name));
// // }

// // function showName() {
// // 	console.log('Вася');
// // }
// // setTimeout(showName, 0);
// // console.log('Коля');

// // let getMessage = (text, name) => text + ', ' + name + '!';

// // let getMessage = function (text, name) {
// // 	return text + ',, ' + name;
// // }


// // let showMessage = function () {
// // 	console.log('fff');
// // };
// // showMessage();


// // 'use strict'
// //getSumm();
// // let getSumm;
// // if (2 > 1) {
// // 	getSumm = function getSumm() {
// // 		let summ = 1 + 2;
// // 		console.log(summ);
// // 	};
// // }
// // getSumm();

// // 'use strict'
// // let showMessage;
// // if (2 > 1) {
// // 	showMessage = function () {
// // 		console.log('ff');
// // 	}
// // }
// // showMessage();

// // function createMessage(name, text) {
// // 	return `${name}, ${text}`;
// // }

// // function sMessage(message) {
// // 	console.log(message);
// // }

// // function initMessage(name, text) {
// // 	sMessage(createMessage(name, text));
// // }

// // initMessage('tema', 'hi');
// // initMessage(5, 6);

// // function showMessage(from, text = anotherFunction()) {
// // 	from = '*' + from + '*';
// // 	console.log(from + ':' + text);
// // }
// // function anotherFunction() {
// // 	return 'plhfcndeqn';
// // }
// // let from = 'artyom';
// // showMessage(from, 'hi');
// // console.log(from);
// // showMessage(from);

// // let pass;
// // function checkAge(age) {
// // 	if (age < 18 || typeof +age !== 'number' || age) {
// // 		pass = prompt('Доступ закрыт введите пароль', '');
// // 		return pass === 'admin' || false;
// // 	} else {
// // 		return true;
// // 	}
// // };
// // let age = prompt('how much you old', '');
// // if (checkAge(age)) {
// // 	alert('Accessed')
// // } else {
// // 	alert('Access is denied!')
// // }
// // let age = prompt('how much you old', '');


// // let age = 10;
// // // function checkAge(age) {
// // // 	return (age > 18) ? true : confirm('Родители разрешили?');
// // // }
// // function checkAge(age) {
// // 	return (age > 18) || confirm('Родители разрешили?');
// // }


// // function min(a, b) {
// // 	if (a < b) {
// // 		return a;
// // 	}
// // 	return b;
// // };

// // function min(a, b) {
// // 	return (a < b) ? a : b;
// // }

// // function pow(x, n) {
// // 	let val = x;
// // 	for (let i = 1; i < n; ++i) {
// // 		val *= x;
// // 	}
// // 	return val;
// // }
// // let x = prompt('Введите первое число', '');
// // let n = prompt('Введите второе число', '');


// // if (n < 1) {
// // 	n = prompt(`Введено не натуральное число ${n}!Введите натуральное`);
// // 	alert(pow(x, n));
// // } else {

// // 	alert(pow(x, n));
// // }


// // let id = Symbol('id');
// // let userInfo = {
// // 	name: 'Вася',
// // 	age: 33,
// // 	[id]: 'Некое значение',
// // 	address: {
// // 		city: 'Минск',
// // 		street: 'Ландера',
// // 	},
// // };
// // console.log(userInfo);
// // console.log(userInfo.address);
// //console.log(userInfo.address.city);
// // function makeUserInfo(obj) {
// // 	return {
// // 		name: name,
// // 		age: age,
// // 	};
// // }
// // let user = makeUserInfo('Вася', 33);
// // userInfo.makeUserInfo = makeUserInfo;
// // console.log(user);
// // console.log(userInfo.makeUserInfo);
// // console.log(makeUserInfo(userInfo));

// //let user = Object.assign({}, userInfo);
// //user.age = 18;
// // console.log(userInfo);
// // console.log(user);

// // 
// // console.log(user);
// // console.log(user?.address);

// // user.doom = undefined;
// // console.log(user);
// // if (user.doom) {
// // 	console.log(user.doom);
// // }
// // if ('doom' in user) {
// // 	console.log(user.doom);
// // }
// // user.showInfo = function () {
// // 	let show = () => console.log(`${this.name},${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);

// // 	show();
// // }

// // user.showInfo();
// // console.log(user);



// // function UserInfo(name) {
// // 	this.name = name;
// // 	this.age = 33;
// // }

// // console.log(new UserInfo('Ann'));
// // console.log(new UserInfo('Kiril'));


// // let userInfo = {
// // 	name: 'deer',
// // 	age: 30,
// // 	'58': 'znachenie',
// // 	address: {
// // 		city: 'minsk',
// // 		street: 'landera'
// // 	}
// // }
// // for (const key in userInfo.address) {
// // 	console.log(key);
// // }


// let userInfo = {};
// userInfo.name = 'Вася';
// userInfo.age = 30;
// userInfo.name = 'Лена';
// delete userInfo.name;
// console.log(userInfo);

// function fac(num) {
// 	// Условие экстренного прекращения
// 	if (num < 0) return;
// 	// Базовая проверка заканчивающая рекурсию
// 	if (num === 1) return num;
// 	// Рекурсия. Функция вызывает сама себя
// 	return num * fac(num - 1);
// }
// fac(5);
// let arrTwo = [
// 	'коля',
// 	{
// 		type: 'js',
// 		age: 33,
// 	},
// 	true,
// 	function () {
// 		console.log('hi, I koля');
// 	},
// ];

// let matrixx = [
// 	[1, 2, 3, 4, 6, 8],
// 	[22, 44, '66', 78],
// ]

// console.log(matrixx);
// console.log(matrixx.length);
// console.log(matrixx[0]);
// matrixx.push('tema');
// //console.log(matrixx);
// //matrixx.shift();
// console.log(matrixx);
// //matrixx.pop();
// //console.log(matrixx);
// matrixx.unshift('deer', true, 33);
// //console.log(matrixx);
// delete matrixx[2];
// console.log(matrixx);

// function fac(num) {
// 	// Условие экстренного прекращения
// 	if (num < 0) return;
// 	// Базовая проверка заканчивающая рекурсию
// 	if (num === 1) return num;
// 	// Рекурсия. Функция вызывает сама себя
// 	return num * fac(num - 1);
// }
// fac(5);

// function summ(obj) {
// 	let sum = 0;
// 	for (let key in obj) {
// 		sum += obj[key];
// 	}
// 	return sum;
// };
// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130
// };

// let menu = {
// 	width: 200,
// 	height: 400,
// 	title: 'toppop',
// };
// function multiplyNumeric(obj) {
// 	for (let key in obj) {
// 		if (typeof obj[key] == 'number') {
// 			obj[key] *= 2;
// 		}
// 	}
// }
// multiplyNumeric(menu);
// console.log(menu);


// function marry(man, woman) {
// 	woman.husband = man;
// 	man.wife = woman;

// 	return {
// 		father: man,
// 		mother: woman,
// 	}
// };




// let user = {
// 	name: "Джgон",
// 	sayHi() {
// 		let say = () => alert(this.name);
// 		say();
// 	},
// 	sayBye() {
// 		let say = () => alert("Пока");
// 		say();
// 	},
// };
// user.sayHi();
// user.sayBye()
// //(user.name == "Джон" ? user.hi : user.bye)();


document.getElementById('out').innerHTML = 3333;
document.getElementById('out').innerHTML = '<b>HI</b>';

document.querySelector('h2.header').innerHTML = 'reedik';
document.querySelector('#one').innerHTML = 'ss';

let inputText = document.querySelector('.input-text');
let buttonText = document.querySelector('.button-text');
let divOut = document.querySelector('.out');

buttonText.onclick = () => {
	console.log('pressnuto');
	IT = +inputText.value;
	IT += 5;
	inputText.value = IT;
	divOut.innerHTML = inputText.value;
}
// UNIT 3. ОПЕРАТОР IF, ELSE, SWITCH CASE - ВЫБОР В JAVASCRIPT (UPDATE 2021-05-12)

const buttonAge = document.querySelector('.butt-age');
const inputAge = document.querySelector('.inp-age');

buttonAge.onclick = () => {
	let num = +inputAge.value;
	if (num >= 16 && num <= 60) {
		console.log('welcome');
	} else if (num > 60) {
		console.log('ты точно');
	} else {
		console.log('не пройдешь');
	}

	switch (num) {
		case 15:
			console.log('есчё год потерпи');
			break;
		case 16:
			console.log('ура можно');
			break;
		default:
			console.log('oooooook');
	}

	let b = 5;

}

//Task1
function f1() {
	let inp1 = document.querySelector('.i-1');
	let out1 = document.querySelector('.out-1');

	if (inp1.value == 4) {
		out1.innerHTML = inp1.value == 4;
		console.log(inp1.value == 4);
	} else {
		console.log(inp1.value == 4);
		out1.innerHTML = inp1.value == 4;
	}
}

document.querySelector('.b-1').onclick = f1;

// Task 2,3

document.querySelector('.b-2').onclick = () => {

	let a21 = document.querySelector('.inp-num1');
	let a22 = document.querySelector('.inp-num2');
	let out2 = document.getElementById('out-2');

	if (a21.value > a22.value) {
		out2.value = a21.value;
	} else {
		out2.value = a22.value;
	}
}

// Task 2,3

document.querySelector('.b-3').onclick = () => {
	console.log(document.querySelector('.i-31').value);
	document.querySelector('.b-3').style.backgroundColor =
		document.querySelector('.i-31').value;
}

document.querySelector('.i-31').oninput = () => {
	document.querySelector('span').innerHTML =
		document.querySelector('.i-31').value;
}

document.querySelector('#b-6').onclick = () => {
	console.log(document.querySelector('#i-6').value);

	let myCheckBox = document.querySelector('#i-6');

	myCheckBox.classList.toggle('hidden');
	myCheckBox.checked = true;
	if (myCheckBox.checked) {
		console.log(myCheckBox.checked);
	} else {
		console.log(myCheckBox.checked);
	}

}
// document.querySelector('#b-6').onclick = () => {
// 	let myCheckBox = document.querySelector('#i-6');
// 	if (myCheckBox.checked) myCheckBox.hidden = false;
// }


document.querySelector('#b-7').onclick = (event) => {
	event.preventDefault();
	// let textAr = document.querySelector('#textAr').value;
	// console.log(textAr);

	let form = document.querySelector('form');
	console.log(form.elements[0].value);
	console.log(form.elements.n2.value);
	console.log(form.elements.inp7.value);
}

document.querySelector('#b8').onclick = f8;

function f8() {
	let out = document.querySelector('#out8');
	for (let i = 0; i < 6; i++) {
		out.innerHTML += '**************' + '<br>';
	}
}

document.querySelector('#i8').onclick = f82;

function f82() {
	let out = document.querySelector('#out8');
	out.innerHTML = 2;
}

document.querySelector('#out8').onclick = f83;

function f83() {
	let out = document.querySelector('#out8').innerHTML;
	let out2 = ++out;
	document.querySelector('#out8').innerHTML = out2;

	//console.log(document.querySelector('#out8').innerHTML);


}






