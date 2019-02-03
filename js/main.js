document.addEventListener('DOMContentLoaded', () => {
	smoothScroll.init({
  		selector: '[data-scroll]',
  		selectorHeader: null,
  		speed: 1000,
  		easing: 'easeInOutCubic',
  		offset: 0,
  		callback: function ( anchor, toggle ) {}
  	});
  	if (screen.width > 340 && screen.width < 650 || screen.width > 760 && screen.width < 1024) {
  		document.getElementById('sidebar').classList.add('bg-dark');
  	} else {
  		document.getElementById('sidebar').classList.remove('bg-dark');
  	}
});