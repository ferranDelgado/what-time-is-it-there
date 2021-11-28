
setInterval(() => {
    const date = new Date()
    document.getElementById("changeColor").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    recalculateWatches()
}, 1000);


function recalculateWatches() {
    const els = document.getElementsByClassName("timeline-row-hour")
    Array.from(els).forEach((el) => {
        const date = new Date()
        const offsetHour = el.dataset.offset | 0
        el.innerHTML = twoDigits(date.getHours() + offsetHour) + ":" + twoDigits(date.getMinutes()) + ":" + date.getSeconds()
    });
}

function twoDigits(value) {
    return ("0" + value).slice(-2)
}