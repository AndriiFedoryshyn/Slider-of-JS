const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slideCount = mainSlide.querySelectorAll('div').length
let activeSlideIndex = 0


sidebar.style.top = `-${(slideCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})


function changeSlide(direction) {
    if ('up' === direction) {
        activeSlideIndex++
        if (activeSlideIndex === slideCount) {
            activeSlideIndex = 0
        }
    } else if ('down' === direction) {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}