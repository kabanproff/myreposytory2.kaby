document.addEventListener('DOMContentLoaded', ()=>{

const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')

const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')

const out = document.querySelector('#output')

function getsInputValues(){
	const value1 = +num1.value
	const value2 =parseInt(num2.value)

	return [value1, value2]
}

function displayResault(rs){
		out.closest('.card').style.display = 'block'
		out.innerHTML = rs
		console.trace()
}

function addHandler(){
	const val = getsInputValues()

	const result = val.reduce((p,i)=>p+i)
	
	displayResault(result)
}

function subHandler(){
	const val = getsInputValues()

	const result = val.reduce((p,i)=>p-i)
	
	displayResault(result)	
}
// console.log(addBtn)
addBtn.addEventListener('click', addHandler)
subBtn.addEventListener('click', subHandler)
})

// console.time('timer')

// let arr = []
// for(let i = 0;i<10000000;i++){
// 	arr.push(i+i)
// }

// console.timeEnd('timer')
// let r;
// function f (){
// 	r = function g(){
// 		console.log('f')
// 	}
// }
