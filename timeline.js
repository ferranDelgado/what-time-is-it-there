function create() {
    document.getElementById("main-timeline").append(createRow())
}

function paintSchedules(schedules) {
    const mainTimeLineElement = document.getElementById("main-timeline")
    mainTimeLineElement.append(createHeader())
    for (const i in schedules) {
        mainTimeLineElement.append(createRow(schedules[i]))
    }
}

function createHeader() {
    const timeline_row = document.createElement("div")
    timeline_row.classList.add("timeline-row")
    
    const nameRow = document.createElement("div")
    nameRow.classList.add("timeline-row-name")
    timeline_row.append(nameRow)

    const timeRow = document.createElement("div")
    timeRow.classList.add("timeline-row-name")
    timeline_row.append(timeRow)
    
    for (let i = 0; i < 24; i++) {
        const unit = document.createElement("div")
        unit.innerHTML = "" + i
        unit.classList.add("timeline-row-unit")
        timeline_row.append(unit)
    }
    return timeline_row
}

function createRow(schedule) {
    schedule = SimpleDate.fromStorage(schedule)
    const timeline_row = document.createElement("div")
    timeline_row.classList.add("timeline-row")
    
    const nameElement = document.createElement("div")
    nameElement.classList.add("timeline-row-name")
    nameElement.innerHTML = "" + schedule["name"]
    timeline_row.append(nameElement)
    
    const hourElement = document.createElement("div")
    hourElement.classList.add("timeline-row-hour")
    hourElement.dataset.offset = schedule["offsetHours"]
    timeline_row.append(hourElement)
    
    const currentUtcHour = new Date().getUTCHours() 
    const currentHour = new Date().getHours()
    const localTimeDiff = currentHour - currentUtcHour 
    for (let i = 0; i < 24; i++) {
        const unit = document.createElement("div")
        const hourThere = SimpleDate.now(schedule.offsetHours).whatHourIsThereFromLocal(i)
        unit.innerHTML = hourThere
        if (schedule.from <= hourThere && hourThere <= schedule.to) {
            unit.classList.add("timeline-row-unit-working-hour")
        } else {
            unit.classList.add("timeline-row-unit-not-working-hour")
        }
        if(i === currentHour) {
            unit.classList.add("timeline-row-unit-current-hour")
        }
        unit.classList.add("timeline-row-unit")
        timeline_row.append(unit)
    }
    return timeline_row
}

function isInWorkingHours(hour, schedule) {
    withOffset = hour + schedule["offsetHours"]
    if (withOffset < 0) {
        withOffset = 24 + withOffset
    } else if (withOffset > 24) {
        withOffset =  withOffset - 24
    }

    return schedule["from"] <= withOffset && withOffset <= schedule["to"]
}

chrome.storage.sync.get(null, all => {
    console.log(Object.values(all))
    paintSchedules(Object.values(all))
    startWatches()
})