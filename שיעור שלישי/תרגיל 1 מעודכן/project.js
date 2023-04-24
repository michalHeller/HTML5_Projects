button();



function sassion(key) {
    sessionStorage.setItem(key, document.getElementById(key).value);

}
function local(key) {
    localStorage.setItem(key, document.getElementById(key).value);
}



function button() {
    if (sessionStorage.getItem("background-Color") != null) 
        document.body.style.backgroundColor = sessionStorage.getItem("background-Color");
    else 
        document.body.style.backgroundColor = localStorage.getItem("background-Color");

    if (sessionStorage.getItem("color") != null)
        document.body.style.color = sessionStorage.getItem("color");
    else
        document.body.style.color = localStorage.getItem("color");

    if (sessionStorage.getItem("fontFamily") != null)
        document.body.style.fontFamily = sessionStorage.getItem("fontFamily");
    else
        document.body.style.fontFamily = localStorage.getItem("fontFamily");

    if (sessionStorage.getItem("fontSize") != null)
        document.body.style.fontSize = sessionStorage.getItem("fontSize");
    else
        document.body.style.fontSize = localStorage.getItem("fontSize");
}






