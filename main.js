window.addEventListener('load', () => {

	if (document.body.classList.contains('fullscreen') && window.innerWidth < 2000) {
		const  sections = document.querySelectorAll('section');
		const content = document.querySelector('.main__content');
		let spinValue = 0;
		let canScroll = true;
		secNav = '';

		document.body.insertAdjacentHTML('beforeend', '<div class="section_navigation"></div>');

		for (let i = 0; i < sections.length; i++) {
			secNav += '<div class="sec_button"><span>'+ sections[i].dataset.title +'</span></div>';
		}

		document.querySelector('.section_navigation').innerHTML = secNav;

		const btns = document.querySelectorAll('.sec_button');

		btns[0].classList.add('active');

		for (let i=0; i<btns.length; i++) {
			btns[i].addEventListener('click', function() {
				document.querySelector('.sec_button.active').classList.remove('active');
				this.classList.add('active');
				spinValue = i;
				scrollContent(spinValue);
			});
		}

		window.addEventListener('mousewheel',(e) => {
			if (canScroll) {

				canScroll = false;

				if (e.deltaY > 0) {
				// Scroll Down
				if (spinValue < sections.length-1) spinValue += 1;
			} else {
				// Scroll Up
				if (spinValue > 0) spinValue -= 1;
			}
				scrollContent(spinValue);

			}

			setTimeout(() => {
				canScroll = true;
				}, 560);

		});

		function scrollContent(count) {
			content.setAttribute('style', 'transform: translateY(-'+ count*100 +'vh);');

			document.querySelector('.sec_button.active').classList.remove('active');
			btns[count].classList.add('active');
		}
	}
});