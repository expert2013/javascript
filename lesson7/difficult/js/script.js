let btn = document.getElementsByTagName('button');
let overlay = document.querySelector('.overlay');
let link = document.getElementsByTagName('a');

link[0].addEventListener('click', function(event) {
	event.preventDefault();
	console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

btn[0].addEventListener('click', function(event) {
		console.log('Произошло событие: ' + event.type + " на элементе " + event.target);
});

overlay.addEventListener('click', function(event) {
		console.log('Произошло событие: ' + event.type + " на элементе " + event.target);
});

btn[1].addEventListener('mouseenter', function(event) {
		console.log('Произошло событие: ' + event.type + " на элементе " + event.target);
});

// btn[0].addEventListener('mouseleave', function() {
// 		console.log('Вы убрали мышь #2!');
// });

// btn[1].addEventListener('mouseenter', function() {
// 		console.log('Вы навели на кнопку #2!');
// });




