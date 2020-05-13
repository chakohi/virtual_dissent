document.querySelector(".start").addEventListener("click", (e) => {
    console.log("hello")
    let x = document.querySelector(".start");
    document.querySelector(".start").parentNode.removeChild(x);
    document.querySelector(".second").style.visibility = 'visible';
});