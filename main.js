var input = document.getElementById('input')
var button = document.getElementById('button')
var container = document.getElementById('container')
var messages = document.getElementById('messages')
var form;
var thought = true;
button.onclick = function(){
	dialog()
}
input.onkeypress = function(e){
	if(e.keyCode === 13 && input.value.length > 0){
		dialog()
	}
}
function dialog(){
		
		var d = document.createElement('div')
		d.className = 'text-left float-left col-7 alert alert-dark'
		d.setAttribute('role' , 'alert')
		
		d.innerHTML = input.value
		messages.insertBefore(d, messages.firstChild)
		input.value = ''

		if(thought){
			setTimeout(function(){

				thought = true;
				var d = document.createElement('div')
				d.className = 'text-right float-right col-7 alert alert-dark'
				d.setAttribute('role' , 'alert')
				d.innerHTML = 'Понимаю'			
				messages.insertBefore(d, messages.firstChild)
			},(Math.random()+0,1)*2000)
		}
		thought = false;

}