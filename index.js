let futureClock = document.querySelector('p')
let futureDate = document.querySelector('div')
function timeToday() {

}
setInterval(() => {
    let date = new Date
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day = date.getDay()
    let mounth = date.getMonth()
    let year = date.getFullYear()
    if (minutes < 10) {
        minutes = 0 + String(minutes)
    }
    if (hours < 10) {
        hours = 0 + String(hours)
    }
    if (seconds < 10) {
        seconds = 0 + String(seconds)
    }
    if (day < 10) {
        day = 0 + String(day)
    }
    if (mounth < 10) {
        mounth = 0 + String(mounth)
    }
    
    futureDate.textContent = `${day}.${mounth}.${year}YEAR`
    futureClock.textContent = `${hours}:${minutes}:${seconds}`
}, 1000)
