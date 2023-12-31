// mobile menu
const hamburger = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('open')
	nav.classList.toggle('flex')
	nav.classList.toggle('hidden')
})

const dropdownBtn = document.querySelector('.dropdownBtn')
dropdownBtn.addEventListener('click', () => {
	document.getElementById('options').classList.toggle('hidden')
	document.getElementById('arrow-up').classList.toggle('hidden')
	document.getElementById('arrow-down').classList.toggle('hidden')
})
const dropdownBtn2 = document.querySelector('.dropdownBtn2')
dropdownBtn2.addEventListener('click', () => {
	document.getElementById('options2').classList.toggle('hidden')
	document.getElementById('arrow-up2').classList.toggle('hidden')
	document.getElementById('arrow-down2').classList.toggle('hidden')
})

document.onclick = function (e) {
	if (!dropdownBtn.contains(e.target)) {
		document.getElementById('options').classList.add('hidden')
		document.getElementById('arrow-up').classList.add('hidden')
		document.getElementById('arrow-down').classList.remove('hidden')
	}
	if (!dropdownBtn2.contains(e.target)) {
		document.getElementById('options2').classList.add('hidden')
		document.getElementById('arrow-up2').classList.add('hidden')
		document.getElementById('arrow-down2').classList.remove('hidden')
	}
	if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
		nav.classList.remove('flex')
		nav.classList.add('hidden')
		hamburger.classList.remove('open')
	}
}
