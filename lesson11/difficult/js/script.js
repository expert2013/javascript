window.addEventListener('DOMContentLoaded', () => {
		
		let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

let hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			//console.log(tabContent[i]);
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
};

 hideTabContent(1);

let showTabContent = (b) =>	{
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
};

info.addEventListener('click', (event) => {
			let target = event.target;
			if (target.className == 'info-header-tab') {
					for (let i = 0; i < tab.length; i++) {
							if (target == tab[i]) {
									showTabContent(i);
									break;
							}
					}
			}

	});

	// Timer
	
	let deadline = '2018-04-15 23:59:59';

	let getTimeRemaining = (endtime) => {
			let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60)	% 60 ),
			hours = Math.floor( (t/(1000*60*60)) );

			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
	};

let setClock = (id, endtime) => {

			let timer = document.getElementById(id),
					hours = timer.querySelector('.hours'),
					minutes = timer.querySelector('.minutes'),
					seconds = timer.querySelector('.seconds');

					let updateClock = () => {
							let t = getTimeRemaining(endtime);
							hours.innerHTML = t.hours;
							minutes.innerHTML = t.minutes;
							seconds.innerHTML = t.seconds;

							if (t.total <= 0) {
							hours.innerHTML = '00';
							minutes.innerHTML = '00';
							seconds.innerHTML = '00';											 
								//	clearInterval(timeInterval);
							}
					};

					updateClock();
					setInterval(updateClock, 1000);
					//let timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer', deadline);

	 let elements = ['about', 'photo', 'price', 'contacts'];
 let	speed = 1; // скорость
	
  	let scrollToElement = (element, speed) => {
			let startScroll = window.pageYOffset, // начальная позиция, текущее положение сколла
	        finishScroll = element.getBoundingClientRect().top, // положение элемента по Y относительно окна браузера
	     		start = null; // тут будем считать затраченное время

				let step = (time) => {
			     // в первый кадр запомним время старта
			     if (start === null) {
			          start = time;
			     }
			    let progress = time - start,     // определить, сколько прошло времени с начала анимации
			        nowScroll = null;              // текущее положение сколла
			     
			     // в зависимости от того двигаемся вверх или вниз, определим текущее положение сколла
				     if (finishScroll < 0) {
				          nowScroll = Math.max(startScroll - progress / speed, startScroll + finishScroll);
				     } else {
				          nowScroll = Math.min(startScroll + progress / speed, startScroll + finishScroll);
				     }
			     // прокрутим скролл
			     window.scrollTo(0, nowScroll);
			     // если прокрутка еще не окончена, повторим шаг
			     if (nowScroll != startScroll + finishScroll) {
			          requestAnimationFrame(step);     // запланировать отрисовку следующего кадра
			     }
			};

		// Начнем плавную прокрутку
		requestAnimationFrame(step);
		};
  
let	links = document.querySelectorAll("a[href^='#']");  
			for (let i = 0; i < links.length; i++) {
					let element = document.getElementById(elements[i]);
						links[i].addEventListener('click', scrollToElement.bind(this, element, speed), false);						
			}

	// modal

	let more = document.querySelector('.more'),
	descriptionBtn = document.querySelectorAll('.description-btn'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', () => {
			overlay.style.display = "none";
			more.classList.remove('more-splash');
			document.body.style.overflow = '';
	});

	for (i = 0; i < descriptionBtn.length; i++) {
			descriptionBtn[i].addEventListener('click', function() {
				this.classList.add('description-btn-splash');
				overlay.style.display = "block";
				document.body.style.overflow = 'hidden';
		});
	}
	
	close.addEventListener('click', () => {
			overlay.style.display = "none";
			descriptionBtn.classList.remove('description-btn-splash');
			document.body.style.overflow = '';
	});

	// Form
	let message = new Object();
	message.loading = "Загрузка...";
 	message.success = "Спасибо! Скоро мы с вами свяжемся";
 	message.failure = "Что-то пошло не так...";
  
  let form = document.getElementsByClassName('main-form')[0],
  input = form.getElementsByTagName('input'),
  statusMessage = document.createElement('div');
  statusMessage.classList.add('status'); // дописать класс
  let statusImage = document.createElement('div');
  

  form.addEventListener('submit', function(event) {
  		event.preventDefault();
  	  form.appendChild(statusMessage);
  	  form.appendChild(statusImage);

  	  // AJAX
  	  let request = new XMLHttpRequest();
  	  request.open("POST", 'server.php');
  	  
  	  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      
      let formData = new FormData(form);

      request.send(formData);

      request.onreadystatechange = function() {
      		if (request.readyState < 4) {
      				statusMessage.innerHTML = message.loading;
      		} else if (request.readyState === 4) {
      			 if ( request.status == 200 && request.status < 300) {
      					statusMessage.innerHTML = message.success;
      					statusMessage.classList.add('status');
      					statusImage.classList.add('img-status_success'); 
      					// Добавляем контент на страницу
      			 }
      			 else {
      			 		statusMessage.innerHTML = message.failure;
      			 		statusImage.classList.add('img-status_error'); 
      			 		
      			 }
      		}
      }
      for (let i = 0; i < input.length; i++) {
      		input[i].value ='';
      		// Очищаем поля ввода
      }


  });

// simple homework
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



});

//  let form2 = document.getElementsByTagName('form')[1];
// console.log(form2);