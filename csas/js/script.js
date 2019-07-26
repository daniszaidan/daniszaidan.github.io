var buttons = document.getElementsByTagName('button');
Array.prototype.forEach.call(buttons, function (b) {
	b.addEventListener('click', createRipple);
});
function createRipple(e) {
	var circle = document.createElement('div');
	this.appendChild(circle);
	var d = Math.max(this.clientWidth, this.clientHeight);
	circle.style.width = circle.style.height = d + 'px';

	var rect = this.getBoundingClientRect();
	circle.style.left = e.clientX - rect.left - d / 2 + 'px';
	circle.style.top = e.clientY - rect.top - d / 2 + 'px';

	circle.classList.add('ripple');
}
function toggleMenu() {
	var menu = document.getElementById('menu-list');
	menu.classList.toggle('menu-open');
}

function shrinkMenu() {
	var distanceY = window.pageYOffset;
	var shrinkOn = 70;
	var nav = document.getElementById('nav');
	if (distanceY > shrinkOn) {
		nav.classList.add('smaller');
	} else {
		nav.classList.remove('smaller');
	}
}
window.addEventListener("scroll", shrinkMenu);
