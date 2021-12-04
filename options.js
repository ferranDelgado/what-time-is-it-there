function handleButtonClick(e) {
  errorBox.innerHTML = ""
  const name = cleanString(userForm.nameInput.value)
  const timeDiff = userForm.countrySelect.value
  const fromTime = userForm.fromTime.value
  const toTime = userForm.toTime.value

  if (validateInput(name, fromTime, toTime)) {
    const fromTimeText = userForm.fromTime[userForm.fromTime.selectedIndex].innerHTML
    const toTimeText = userForm.toTime[userForm.toTime.selectedIndex].innerHTML
    storeData(name, timeDiff, fromTime, toTime)
    tableBody.appendChild(createRow(name, timeDiff, fromTimeText, toTimeText))
  }
}

function storeData(name, timeDiff, fromTime, toTime) {
  const value = {
    name: name,
    from: fromTime | 0,
    to: toTime | 0,
    offsetHours: timeDiff | 0
  }
  chrome.storage.sync.set({ [name]: value });

}

function cleanString(str) {
  return str.trim()
}

function validateInput(name, fromTime, toTime) {
  nameError = errorIfFalse(name.length > 0, ["countrySelect"], "Name is missing")
  fromTimeError = errorIfFalse(
    fromTime.trim().length > 0 && !isNaN(fromTime), 
    ["fromTime", "toTime"],
    `From time must be set ${typeof fromTime}`
    )
  toTimeError = errorIfFalse(
    toTime.trim().length > 0 && !isNaN(toTime), 
    ["fromTime", "toTime"], 
    `To time must must be set ${typeof toTime}`
    )
  timeError = errorIfFalse(
    (fromTime|0) <= (toTime|0), 
    ["fromTime", "toTime"], 
    `From time ${fromTime} must be before To Time ${toTime}`
    )
  return nameError && timeError && fromTimeError && toTimeError
}

function errorIfFalse(check, ids, message) {
  if (!check) {
    addError(message)
  }
  return check
}

function addError(message) {
  const div = document.createElement("div")
  div.innerHTML = message
  errorBox.appendChild(div)
}

function createRow(name, timeDiff, fromTime, toTime) {
  row = document.createElement("tr")
  row.appendChild(createColumn(name))
  row.appendChild(createColumn(timeDiff))
  row.appendChild(createColumn(fromTime))
  row.appendChild(createColumn(toTime))
  return row
}

function createColumn(value) {
  td = document.createElement("td")
  td.innerHTML = value
  return td
}

clearDataBtn.addEventListener("click", () => {
  chrome.storage.sync.clear(() => {
    tableBody.innerHTML = ""
  })
})

document.getElementById("add-btn").addEventListener("click", handleButtonClick);

chrome.storage.sync.get(null, all => {
  console.log(Object.values(all))
  for (const schedule of Object.values(all)) {
    tableBody.appendChild(createRow(schedule.name, schedule.offsetHours, schedule.from, schedule.to))
  }
});
