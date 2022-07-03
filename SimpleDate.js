const SimpleDate = {
    fromStorage: (data) => {
        object = {
            toStorage: () => {
                
            },
            name: data.name,
            offsetHours: data.offsetHours,
            to: data.to,
            from: data.from
        }
        return object
    },
    now: (utcDiff) => {
        object = {
            whatHourIsThereFromLocal: (hour) => {
                const localDiff = new Date().getUTCHours() - new Date().getHours()
                const calculatedHour = hour + localDiff + utcDiff
                if(calculatedHour >= 24) {
                    return calculatedHour - 24
                } else if (calculatedHour < 0) {
                    return 24 + calculatedHour
                } else {
                    return calculatedHour
                }
            },
            prettyPrint: () => {
                function twoDigits(value) {
                    return ("0" + value).slice(-2)
                }
                const date = new Date()
                const hour = object.whatHourIsThereFromLocal(date.getHours())
                return `${twoDigits(hour)}:${twoDigits(date.getMinutes())}` // :${twoDigits(date.getSeconds())}`
            }
        }
        return object
    }
}
