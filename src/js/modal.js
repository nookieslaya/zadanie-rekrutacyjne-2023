const modal = document.querySelector('.modal')
const showModal = document.querySelector('.showModal')
const showModal2 = document.querySelector('.showModal2')
const showModal3 = document.querySelector('.showModal3')
const closeModal = document.querySelector('.closeModal')

showModal.addEventListener('click', () => {
	modal.classList.remove('hidden')
})

closeModal.addEventListener('click', () => {
	modal.classList.add('hidden')
})
showModal2.addEventListener('click', () => {
	modal.classList.remove('hidden')
})
showModal3.addEventListener('click', () => {
	modal.classList.remove('hidden')
})

closeModal.addEventListener('click', () => {
	modal.classList.add('hidden')
})
