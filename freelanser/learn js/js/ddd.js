// console.log("Привет я ddd");
// function dddJs(){
// 	console.log(`function ddd true`);
// }

let user = {
	name: 'Артём',
	lastName: 'Протько',
	age(){
		return (new Date().getFullYear()
		- new Date('1987,3,24').getFullYear())
	}
}
