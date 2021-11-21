setInterval(() => {
    const date = new Date()
    document.getElementById("changeColor").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}, 1000);