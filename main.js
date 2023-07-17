var on = true;

function changeBackgroundColor(color1, color2) {

	if(on == true){
		document.body.style.backgroundColor = color1;
		on = false
	}
	else{
		document.body.style.backgroundColor = color2;
		on = true
	}
}
