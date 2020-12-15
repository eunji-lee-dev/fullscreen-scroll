window.addEventListener('load', () => {
	if (document.body.classList.contains('fullscreen') && window.innerWidth > 1024) {
		const  sections = document.querySelectorAll('section');
		const content = document.querySelector('.main__content');
		let spinValue = 0;
		let canScroll = true;

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
		}
	}
});