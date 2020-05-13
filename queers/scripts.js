document.querySelector(".start").addEventListener("click", (e) => {
    console.log("hello")
    let x = document.querySelector(".start");
    let y = document.querySelector(".credits");
    document.querySelector("#footer").style.position = "relative";
    document.querySelector(".start").parentNode.removeChild(x);
    document.querySelector(".credits").parentNode.removeChild(y);
    document.querySelector(".second").style.visibility = 'visible';
});