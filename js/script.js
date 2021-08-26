const menuToggle =  document.querySelector('.menu-toggle input');
const navbar = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
	navbar.classList.toggle('appear');
});