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

	// Scroll

  function animate(draw, duration) {
      let start = performance.now();
      requestAnimationFrame(
            function animate(time) {
                let timePassed = time - start;
                if (timePassed > duration) {
                    timePassed = duration;
                }

                draw(timePassed);

                if (timePassed < duration) {
                    requestAnimationFrame(animate);
                }
      })

  };
  let menu = document.getElementsByTagName('nav')[0];

    menu.addEventListener('click', function(event) {
      event.preventDefault();
      animate(function(timePassed) {
        let target = event.target;
        let section = document.getElementById(target.getAttribute('href').slice(1));
        window.scrollBy(0, section.getBoundingClientRect().top / 20 -3);
      }, 1500)
    })
 

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

  form.addEventListener('submit', function(event) {
  		event.preventDefault();
  	  form.appendChild(statusMessage);

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
      					// Добавляем контент на страницу
      			 }
      			 else {
      			 		statusMessage.innerHTML = message.failure;
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

  // slider

  let slideIndex = 1,
  slides = document.getElementsByClassName('slider-item'),
  prev = document.querySelector('.prev'),
  next = document.querySelector('.next'),
  dotsWrap = document.querySelector('.slider-dots'),
  dots = document.getElementsByClassName('dot');

  showSlides(slideIndex);

  function showSlides(n) {

  		if(n > slides.length) {
  				slideIndex = 1;
  		};
  		if (n < 1) {
  				slideIndex = slides.length;
  		};

  		for ( let i = 0; i < slides.length; i++) {
  				slides[i].style.display = 'none';
  		};

  		for ( let i = 0; i< dots.length; i++) {
  				dots[i].classList.remove('dot-active');
  		};

  		slides[slideIndex - 1].style.display = 'block';
  		dots[slideIndex - 1].classList.add('dot-active');
  }
  
  function plusSlides(n) {
  		showSlides(slideIndex += n)
  }

  function currentSlide(n) {
  		showSlides(slideIndex = n)
  }

  prev.addEventListener('click', function(){
  		plusSlides(-1);
  });
  
  next.addEventListener('click', function(){
  		plusSlides(1);
  });

  dotsWrap.addEventListener('click', function(event) {
  		for ( let i = 0; i < dots.length + 1; i++) {
  				if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
  						currentSlide(i);
  				}
  		}
  });

  // Calc

  let persons = document.getElementsByClassName('counter-block-input')[0],
  		restDays = document.getElementsByClassName('counter-block-input')[1],
  		place = document.getElementById('select'),
  		totalValue = document.getElementById('total'),
  		personsSum = 0,
  		daysSum = 0,
  		total = 0;

  		totalValue.innerHTML = 0;

  		persons.addEventListener('change', function(){
  				personsSum = +this.value;
  				total = (daysSum + personsSum)*4000;
  				if (restDays.value == '' || this.value == '' || restDays.value <= 0  || persons.value <= 0) {
  						totalValue.innerHTML = 0;
  					
  				} else {
  						totalValue.innerHTML = total;
  				} 
  		});

  		restDays.addEventListener('change', function(){
  				daysSum = +this.value;
  				total = (daysSum + personsSum)*4000;
  				if (persons.value == '' || this.value == '' || restDays.value <= 0  || persons.value <= 0 ) {
  						totalValue.innerHTML = 0; 
  						
  				} else {
  						totalValue.innerHTML = total;
  				}
	  		
  		});
      
  		place.addEventListener('change', function() {
  				if (restDays.value == '' || persons.value == '' ) {
  						totalValue.innerHTML = 0;		    
  				
  				} else {
  					  let a = total;	
  						totalValue.innerHTML = a * this.options[this.selectedIndex].value;
  				}
  				
  		});

});
