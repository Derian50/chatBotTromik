var input = document.getElementById('input')
var button = document.getElementById('button')
var container = document.getElementById('container')
var messages = document.getElementById('messages')
var form;
console.log(input)
console.log(button)
button.onclick = function(){
	dialog()
}
input.onkeypress = function(e){
	if(e.keyCode === 13 && input.value.length > 0){
		dialog()
	}
}
function dialog(){
	console.log('SUCK')
		console.log(input.value)
		
		var d = document.createElement('div')
		d.className = 'text-left float-left col-7 alert alert-dark'
		d.setAttribute('role' , 'alert')
		if(input.value.length > 22){
			input.value = input.value.substr(0,22)
		}
		d.innerHTML = input.value
		messages.appendChild(d)
		input.value = ''

		setTimeout(function(){
			var d = document.createElement('div')
			d.className = 'text-right float-right col-7 alert alert-dark'
			d.setAttribute('role' , 'alert')
			d.innerHTML = 'Понимаю'
			messages.appendChild(d)
		},Math.random()*2000)

}