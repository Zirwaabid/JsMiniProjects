const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("mouseover", (evt) => {
    const x = (evt.pageX - btnE1.offsetLeft);
    const y = (evt.pageY - btnE1.offsetTop);
    btnE1.style.setProperty("---posx", x + "px");
    btnE1.style.setProperty("---posy", y + "px");
});