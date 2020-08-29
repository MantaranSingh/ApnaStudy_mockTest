const startingMinutes = 10
let time = startingMinutes * 60

const countdownEl = document.getElementById('countdown')

setInterval(updateCountdown, 1000)

function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds

    countdownEl.innerHTML = `${minutes}:${seconds}`
    time--
    time = time < 0 ? 0 : time
}

let mockList = document.querySelector('.mockList')
let listItems = mockList.getElementsByTagName('li')

Array.from(listItems).forEach((elements) => {
    elements.addEventListener('click', (event) => {
        const active = mockList.querySelector('.active')
        if (active) {
            active.classList.remove('active');
        }
        event.currentTarget.classList.add('active');
        let length = event.target.innerText * 6.66

        document.querySelector('.barProgress')
            .style.width = `${length}%`

        document.querySelector('.questions h1')
            .innerText=`Question ${event.target.innerText}`
        document.querySelector('.mockBar h2')
            .innerText=`${event.target.innerText}/20 Questions`
    })
})

let answer = document.getElementsByClassName('answer')
Array.from(answer).forEach(elements => {
    elements.addEventListener('click', (event) => {
        const selected = document.querySelector('.selected')
        if (selected) {
            selected.classList.remove('selected')
        }
        event.currentTarget.classList.add('selected')
    })
})