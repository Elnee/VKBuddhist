var excludeIds = ['12341234']; //Array of excluded IDs

var dials = document.getElementsByClassName('dialogs_del'); 
for (var i = 0; i < dials.length; i++) {
	var isExclude = false;
	for (var j = 0; j < excludeIds.length; j++) {
		if (String(dials[i].onclick).indexOf(excludeIds[j]) > 0) isExclude = true;
	}
	if (!isExclude) dials[i].click();
}
setTimeout(function(){
	var buttons = document.querySelectorAll('button.flat_button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].click();
	}
	location.reload();
}, 1000);