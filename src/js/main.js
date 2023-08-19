import '../css/main.scss'
import Masonry from 'masonry-layout'
var SimpleLightbox = require('simple-lightbox')

const dropdownBtn = document.querySelector('.dropdownBtn')
dropdownBtn.addEventListener('click', () => {
	document.getElementById('options').classList.toggle('hidden')
	document.getElementById('arrow-up').classList.toggle('hidden')
	document.getElementById('arrow-down').classList.toggle('hidden')
})

new SimpleLightbox({ elements: '.grid-gallery a', captionAttribute: 'title' })

window.onload = () => {
	const grid = document.querySelector('.grid')
	const masonry = new Masonry(grid, {
		itemSelector: '.grid-item',
		gutter: 43,
	})
	loadMore()
}
const loadMore = () => {
	let loadMoreBtn = document.querySelector('#load-more')

	loadMoreBtn.addEventListener('click', () => {
		const gradient = document.querySelector('.gradient')
		const grid = document.querySelector('.grid')
		const masonry = new Masonry(grid, {
			itemSelector: '.grid-item',
			gutter: 43,
		})
		let currentItem = 9
		let boxes = document.querySelectorAll('.box')
		for (let i = currentItem; i < currentItem + 3; i++) {
			if (boxes[i]) {
				boxes[i].style.display = 'grid'
				gradient.style.display = 'none'
			}
		}
		currentItem += 3

		if (currentItem >= boxes.length) {
			loadMoreBtn.style.display = 'none'
		}
	})
}
loadMore()
