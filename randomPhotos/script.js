const imgContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    imgNumber = 10;
    generateImg()
})

function generateImg() {
    for (let index = 0; index < imgNumber; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imgContainerEl.appendChild(newImgEl);
    }
}