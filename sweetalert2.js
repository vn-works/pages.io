function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        }
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

document.addEventListener("DOMContentLoaded", function () {
    console.log('llloaed');
    var myElement = document.getElementById("android_url");
    if (myElement) {
                // alert("Hello!");
        // if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // httpGetAsync(
            // "https://ipinfo.io?token=f6ca1e8e900e00",
            // function (response) {
                var coutryy = "JP";
                console.log(coutryy);
                // var android_url_global = "intent://babyacapp/#Intent;scheme=babyacapp;package=fa.vnworks.babygpt;end";
                // var android_url_local = "intent://babyac/#Intent;scheme=babyac;package=jp.com.acworks.babyac;end";
                // var coutryy =  "JP";
                if (coutryy == "JP" || coutryy == "VN") {
                    myElement.href = "https://www.google.com";
                } else {
                    myElement.href = "https://www.google.com/abcd";
                }
            }
        // );
        // }
    // } else {
        // console.error("Element not found.");
    // }
});
