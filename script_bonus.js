var clickDiv = document.getElementById("div1")
var enterDiv = document.getElementById("div2")
var leaveDiv = document.getElementById("div3")
var overDiv = document.getElementById("div4")
var all = document.getElementsByTagName("div")


// var cptclick = document.getElementById("cpt-click")
var cptclick = 0
var cptclick_2 = 0
var cptclick_3 = 0
var cptclick_4 = 0


for (let i = 0; i < all.length; i++) {
    all[i].addEventListener("click", function () {
        var cptclick1 = cptclick += 1
        document.getElementsByTagName("span")[0].innerHTML = cptclick1;
        if (cptclick1 > 10) {
            clickDiv.style.backgroundColor = "green"
        }
        if (cptclick1 > 30) {
            clickDiv.style.backgroundColor = "red"
        }
    })
}

for (let i = 0; i < all.length; i++) {
    all[i].addEventListener("mouseenter", function () {
        var cptclick2 = cptclick_2 += 1
        document.getElementsByTagName("span")[1].innerHTML = cptclick_2;
        if (cptclick2 > 10) {
            enterDiv.style.backgroundColor = "green"
        }
        if (cptclick2 > 30) {
            enterDiv.style.backgroundColor = "red"
        }
    })
}

for (let i = 0; i < all.length; i++) {
    all[i].addEventListener("mouseleave", function () {
        var cptclick3 = cptclick_3 += 1
        document.getElementsByTagName("span")[2].innerHTML = cptclick_3;
        if (cptclick3 > 10) {
            leaveDiv.style.backgroundColor = "green"
        }
        if (cptclick3 > 30) {
            leaveDiv.style.backgroundColor = "red"
        }
    })
}

for (let i = 0; i < all.length; i++) {
    all[i].addEventListener("dblclick", function () {
        var cptclick4 = cptclick_4 += 1
        document.getElementsByTagName("span")[3].innerHTML = cptclick_4;
        if (cptclick4 > 10) {
            overDiv.style.backgroundColor = "green"
        }
        if (cptclick4 > 30) {
            overDiv.style.backgroundColor = "red"
        }
    })
}