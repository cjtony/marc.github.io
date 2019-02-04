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
  		document.getElementById('contsec1').classList.add('mt-4');
  		document.getElementById('tarico').classList.remove('ocult');
  		document.getElementById('sec2').classList.remove('py-5');
  		document.getElementById('sec3').classList.remove('py-5');
  		document.getElementById('sec4').classList.remove('py-5');
  		document.getElementById('sec5').classList.remove('py-5');
  		document.getElementById('sectec').classList.remove('py-5');
  		document.getElementById('sec5').classList.add('mt-3');
  		document.getElementById('imgus').classList.add('mt-5');
  		document.getElementById('contmsj').classList.add('mt-5');
  		document.getElementById('contfot').classList.remove('mt-5');
  	} else {
  		document.getElementById('sidebar').classList.remove('bg-dark');
  	}
});