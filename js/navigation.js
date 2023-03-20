const open = document.getElementById('open')
const close = docuemnt.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
    container.classList.add('show-nav')
})

close.addEventListener('click', () => {
    container.classList.remove('show-nav')
})