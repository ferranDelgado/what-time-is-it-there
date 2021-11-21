function create() {
    document.getElementById("main-timeline").append(createRow())
}
const mainTimeLineElement = document.getElementById("main-timeline")

mainTimeLineElement.append(createHeader())
const schedules = getSchedules()
for (const i in schedules) {
    mainTimeLineElement.append(createRow(schedules[i]))
}

function createHeader() {
    const timeline_row = document.createElement("div")
    timeline_row.classList.add("timeline-row")
    
    const unit = document.createElement("div")
    unit.classList.add("timeline-row-name")
    timeline_row.append(unit)
    
    for (let i = 0; i < 24; i++) {
        const unit = document.createElement("div")
        unit.innerHTML = "" + i
        unit.classList.add("timeline-row-unit")
        timeline_row.append(unit)
    }
    return timeline_row
}

function createRow(schedule) {
    const timeline_row = document.createElement("div")
    timeline_row.classList.add("timeline-row")
    
    const unit = document.createElement("div")
    unit.classList.add("timeline-row-name")
    unit.innerHTML = "" + schedule["name"]
    timeline_row.append(unit)
    
    for (let i = 0; i < 24; i++) {
        const unit = document.createElement("div")
        if (isInWorkingHours(i, schedule)) {
            unit.classList.add("timeline-row-unit-working-hour")
        } else {
            unit.classList.add("timeline-row-unit-not-working-hour")
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

function getSchedules() {
    return [
        {
            name: "Ferran",
            from: 8,
            to: 18,
            offsetHours: 0
        },
        {
            name: "Reem",
            from: 8,
            to: 18,
            offsetHours: -5
        },
        {
            name: "UK",
            from: 8,
            to: 18,
            offsetHours: +4
        }
    ]
}