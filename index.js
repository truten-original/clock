let futureClock = document.querySelector('p')
let futureDate = document.querySelector('div')
function timeToday(date) {
    
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day = date.getDate()
    let mounth = date.getMonth()
    let year = date.getFullYear()
    return units = [
        hours,
        minutes,
        seconds,
        day,
        mounth,
        year
    ]
}
setInterval(() => {
    let date = new Date
    timeToday(date)
    if (units[1] < 10) {
        units[1] = 0 + String(units[1])
    }
    if (units[0] < 10) {
        units[0] = 0 + String(units[0])
    }
    if (units[2] < 10) {
        units[2] = 0 + String(units[2])
    }
    if (units[3] < 10) {
        units[3] = 0 + String(units[3])
    }
    if (units[4] < 10) {
        units[4] = 0 + String(units[4]+1)
    }
    
    futureDate.textContent = `${units[3]}.${units[4]}.${units[5]}YEAR`
    futureClock.textContent = `${units[0]}:${units[1]}:${units[2]}`
}, 1000)
