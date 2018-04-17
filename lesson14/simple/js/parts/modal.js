function modal() {
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
}

module.exports = modal;