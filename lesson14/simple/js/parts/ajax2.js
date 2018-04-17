function ajax2() {
	let message2 = new Object();
	message2.loading = "Загрузка...";
 	message2.success = "Спасибо! Скоро мы с вами свяжемся";
 	message2.failure = "Что-то пошло не так...";

let contactForm = document.getElementsByClassName('contact-form')[0],
  input2 = contactForm.getElementsByTagName('input'),
  statusMessage2 = document.createElement('div');
  statusMessage2.classList.add('status'); // дописать класс

  contactForm.addEventListener('submit', function(event) {
  		event.preventDefault();
       	  

  	  contactForm.appendChild(statusMessage2);

  	  // AJAX
  	  let request = new XMLHttpRequest();
  	  request.open("POST", 'server.php');
  	  
  	  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      
      let formData = new FormData(contactForm);

      request.send(formData);

      request.onreadystatechange = function() {
      		if (request.readyState < 4) {
      				statusMessage2.innerHTML = message2.loading;
      		} else if (request.readyState === 4) {
      			 if ( request.status == 200 && request.status < 300) {
      					statusMessage2.innerHTML = message2.success;
      					// Добавляем контент на страницу
      			 }
      			 else {
      			 		statusMessage2.innerHTML = message2.failure;
      			 }
      		}
      }
      for (let i = 0; i < input2.length; i++) {
      		input2[i].value ='';
      		// Очищаем поля ввода
      }
  });
}

module.exports = ajax2;