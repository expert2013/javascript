let menuItem = document.getElementsByClassName('menu-item'),   
menu = document.getElementsByClassName('menu')[0],
body = document.getElementsByTagName('body')[0],
title = document.getElementById('title'),
adv = document.getElementsByClassName('adv')[0]

setTimeout(function() {
	document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
	let	prompt1 = document.getElementById('prompt');
	let answer = prompt("Как Вы относитесь к технике apple?","");
	prompt1.textContent = answer;
}, 300);

menu.insertBefore(menuItem[2], menuItem[1]); 
title.textContent = title.textContent + " подлинную";
adv.parentNode.removeChild(adv);

