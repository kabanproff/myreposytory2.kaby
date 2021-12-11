let str = "Маша Паша, Саша Даша, Ваня"; // Массив имен 

let arr1 = [
    {name: "Маша", age: 25, isMan: false},
    {name: "Саша", age: 38, isMan: true},
    {name: "Катя", age: 17, isMan: false},
    {name: "Ваня", age: 10, isMan: true},
    {name: "Максим", age: 40, isMan: true},

];


//1. Вывести массив мальчиков
//2. Из женских имен сделать аббривиатуру
//3. Найти средний возраст всех участников

//console.log(arr1.filter(item => !item.isMan).reduce((prev, item) => prev + item.name[0],''));

console.log(arr1.reduce((prev, item) => prev + (item.age / arr1.length), 0));

let raspil = str.split(' ');
let newArr = raspil.map(item => {
	if (item[item.length - 1]  === ',') return item.slice(0, -1);
	else return item;
});
console.log(newArr);

function sayHaha(){
	console.log('XAXAXAXAXAXAXA');
}
