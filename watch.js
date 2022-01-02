
function startWatches() {
    recalculateWatches()
    setInterval(recalculateWatches, 1000);
}


function recalculateWatches() {
    const els = document.getElementsByClassName("timeline-row-hour")
    Array.from(els).forEach((el) => {
        const date = new Date()
        const offsetHour = el.dataset.offset | 0
        el.innerHTML = offsetHour + "-" + SimpleDate.now(offsetHour).prettyPrint() // twoDigits(date.getHours() + offsetHour) + ":" + twoDigits(date.getMinutes()) + ":" + twoDigits(date.getSeconds())
    });
}

function twoDigits(value) {
    return ("0" + value).slice(-2)
}