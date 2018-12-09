const menuBtn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const menuPortrait = document.querySelector('.portrait');
const navItems = document.querySelectorAll('.nav-item');

const submitBtn = document.querySelector('.submitBtn');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		menuPortrait.classList.add('show');
		navItems.forEach((item) => item.classList.add('show'));
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItems.forEach((item) => item.classList.remove('show'));
		showMenu = false;
	}
}


const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
