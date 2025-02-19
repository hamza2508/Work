function updatestatus() {
    var status = document.getElementById("stat")
    if (navigator.online) {
        console.log("online")
        stat.innertext = "YOU ARE ONLINE"
        stat.style.color = "green"

    }
    else {
        console.log("offline")

        stat.innertext = "YOU ARE OFFLINE"
        stat.style.color = "red"
    }
}
window, addEventListener("online", updatestatus())
window, addEventListener("offline", updatestatus())

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.title = "Please Come Back 😒😒"
    }
    else {
        document.title = "Document"

    }
})
window.addEventListener("deviceorientation" , function (e) {
    var alpha = e.alpha.toFixed(2)
    var beta = e.beta.toFixed(2)
    var gamma = e.gamma.toFixed(2)

})
document.getElementById("devicestatus").innerHTML = `Alpha: ${alpha} , Beta: ${beta} , Gamma: ${gamma}`