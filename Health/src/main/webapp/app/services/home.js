'use strict'

function getMortalityData() {
    console.log("In getMortalityData function");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Ajax call successful.");
            document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/health/api/home/getMortalityData", true);
    xhttp.send();
}
