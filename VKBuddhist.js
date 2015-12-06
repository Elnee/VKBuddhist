var dials = document.getElementsByClassName('dialogs_del'); 
for (var i = 0; i < dials.length; i++) {
	dials[i].click();
}
setTimeout(function(){
	var buttons = document.querySelectorAll('button.flat_button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].click();
	}
	location.reload();
},1000);