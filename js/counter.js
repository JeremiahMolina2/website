const counter = document.querySelectorAll('.counter')

counter.forEach(counter => {
    counter.innerText= '0'

    const updateCounter = () => {
        const target = counter.getAttribute('data-target')
        console.log(target)
    }
})