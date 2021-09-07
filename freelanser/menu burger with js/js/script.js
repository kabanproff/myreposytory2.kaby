'use strict'

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	},
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener('click', function (e) {
				menuArrow.parentElement.classList.toggle('_active')
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}
//Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;  // получаем целевой обект на который кликаем
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto); // получаем в конст обект который существует
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;// высчитываем высоту обекта с учетом шапки

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

let arrow = [3, 4, 7, 3, 2, 1, 2, 2, 5, 6, 7];

let arr = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
	{ name: 'Толя', age: 18 },
];

// let resultOne = arr.find(function (item, index, array) {
// 	return item.age === 18;
// });

// console.log(resultOne);

// let resultTwo = arr.findIndex( (item) => item.age === 'Не скажу');
// console.log(resultTwo);

// let resultThree = arr.filter(item => item.age ===18 );
// console.log(resultThree);

let arrTwo = [8, 22, 1];
console.log(arrTwo.sort());

function cn(a, b) {
	console.log(`Сравниваем ${a} и ${b}`);
	if (a > b) {
		console.log(`${a} больше ${b}`);
		return 1;
	}
	if (a == b) {
		console.log(`${a} равно ${b}`);
		return 0;
	}
	if (a < b) {
		console.log(`${a} меньше ${b}`);
		return -1;
	}
}
console.log(arrTwo.sort((a, b) => a - b));
//console.log(arrTwo.sort(cn));

let arr1 = ['Ваня', 'Оля', 'Петя', 'Глеб']

let res = arr1.map(item => item[0]);
console.log(arr1, res);

let aa = 'ASDFH';
console.log(aa.toLowerCase());
console.log(aa.toLowerCase().split('').reverse().join(''));

//let val1 = arr1.pop();

let a = 4;
switch (a) {
	case 2:
		console.log('2');
	case 4:
		console.log('4');
		break;
	case 5:
		console.log('5');
	case 6:
		console.log('6');
}

function pow(x, n) {
	if (n < 0) return NaN;
	if (Math.round(n) != n) return NaN;
	let result = x;

	for (let i = 1; i < n; i++) {
		result *= x;
	}
	return result;
	/* Сюда будем писать реализацию, пока реализации нет */
}

let aray = ['Ваня', 'Иштван'];

aray.push('Оля');
console.log(aray);

let aray1 = aray.filter(item => {


	if (item == 'Иштван') {
		return item = 'Петя';
	}

});
console.log(aray);
console.log(aray1);

function fib(n) {

	let a = 1;
	let b = 1;
	let c = 2;

	for (let i = 3; i <= n; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return b;

}
