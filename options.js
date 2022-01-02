var globalCounter = -1

function deleteSchedule(key) {
  chrome.storage.sync.remove([key], function () {
    var error = chrome.runtime.lastError;
    if (error) {
      console.error(error);
    } else {
      console.log(`${key} removed from storage`)
      createForms()
    }
  });
}

function saveForm(form) {
  errorBox.innerHTML = ""
  const key = form.dataset.key == undefined ? globalCounter + 1 : form.dataset.key
  const name = cleanString(form.name.value)
  const timeDiff = form.country.value
  const fromTime = form.fromTime.value
  const toTime = form.toTime.value

  if (validateInput(name, fromTime, toTime)) {
    const fromTimeText = form.fromTime[form.fromTime.selectedIndex].innerHTML
    const toTimeText = form.toTime[form.toTime.selectedIndex].innerHTML
    storeData(key, name, timeDiff, fromTime, toTime)
    // tableBody.appendChild(createRow(name, timeDiff, fromTimeText, toTimeText))
  }
}

function storeData(key, name, timeDiff, fromTime, toTime) {
  const value = {
    name: name,
    from: fromTime | 0,
    to: toTime | 0,
    offsetHours: timeDiff | 0
  }
  chrome.storage.sync.set({ [key]: value }, () => {
    console.log(`Data stored ${key} ${JSON.stringify(value)}`)
    createForms()
  });
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
    (fromTime | 0) <= (toTime | 0),
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

function createForms() {
  chrome.storage.sync.get(null, all => {
    console.log(all)
    globalCounter = Object.keys(all).length
    allSchedules.innerHTML = ""
    for (const key in all) {
      schedule = all[key]
      allSchedules.appendChild(createForm(key, schedule.name, schedule.offsetHours, schedule.from, schedule.to))
    }
    allSchedules.appendChild(createForm(null, "", 0, 8, 16))
  });
}


function createForm(key, name, timeDiff, fromTime, toTime) {
  original = document.getElementById("userForm")
  const form = original.cloneNode(true)
  form.style.display = "block"
  form.id = `form-${name}`
  form.name.value = name
  form.country.value = timeDiff
  form.fromTime.value = fromTime
  form.toTime.value = toTime
  form.saveButton.innerHTML = key == null ? "Create" : "Save"
  if (key != null) {
    form.saveButton.innerHTML = "Save"
    form.dataset.key = key
    form.deleteButton.onclick = function () {
      deleteSchedule(key)
    }
  } else {
    form.saveButton.innerHTML = "Create"
    form.deleteButton.style.display = "none"
  }
  form.saveButton.onclick = function () {
    console.log(`save ${name}`)
    saveForm(form)
  }
  return form
}

createForms()