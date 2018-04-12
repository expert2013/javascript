window.addEventListener('DOMContentLoaded', function() {
		
		let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			console.log(tabContent[i]);
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
}

 hideTabContent(1);

function showTabContent(b)	{
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
}

info.addEventListener('click', function(event) {
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
	
	let deadline = '2018-04-15 20:59:59';

	function getTimeRemaining(endtime) {
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

function setClock(id, endtime) {

			let timer = document.getElementById(id),
					hours = timer.querySelector('.hours'),
					minutes = timer.querySelector('.minutes'),
					seconds = timer.querySelector('.seconds');

					function updateClock() {
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
					let timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer', deadline);

	 let elements = ['about', 'photo', 'price', 'contacts'];
  let	speed = 0.2; // скорость
	
	let	links = document.querySelectorAll("a[href^='#']");  
			for (let i = 0; i < links.length; i++) {
					let element = document.getElementById(elements[i]);
						links[i].addEventListener('click', scrollToElement.bind(this, element,1), false);						
			};
	
  	function scrollToElement(element, speed) {
			let startScroll = window.pageYOffset, // начальная позиция, текущее положение сколла
	        finishScroll = element.getBoundingClientRect().top, // положение элемента по Y относительно окна браузера
	     		start = null; // тут будем считать затраченное время

				function step(time) {
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
			}

		// Начнем плавную прокрутку
		requestAnimationFrame(step);
		};

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
	close.addEventListener('click', function() {
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
	
	close.addEventListener('click', function() {
			overlay.style.display = "none";
			descriptionBtn.classList.remove('description-btn-splash');
			document.body.style.overflow = '';
	});
});



















