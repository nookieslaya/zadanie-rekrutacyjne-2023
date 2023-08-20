// mobile menu
const hamburger = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('open')
	nav.classList.toggle('flex')
	nav.classList.toggle('hidden')
})

document.onclick = function (e) {
	if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
		nav.classList.remove('flex')
		nav.classList.add('hidden')
		hamburger.classList.remove('open')
	}
}

// dropdown menu
const dropdownBtn = document.querySelector('.dropdownBtn')
dropdownBtn.addEventListener('click', () => {
	document.getElementById('options').classList.toggle('hidden')
	document.getElementById('arrow-up').classList.toggle('hidden')
	document.getElementById('arrow-down').classList.toggle('hidden')
})

document.onclick = function (e) {
	if (!dropdownBtn.contains(e.target)) {
		document.getElementById('options').classList.add('hidden')
		document.getElementById('arrow-up').classList.add('hidden')
		document.getElementById('arrow-down').classList.remove('hidden')
	}
}
