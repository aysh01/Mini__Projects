window.onload = function () {
    let container = document.querySelector(".overflow");
    let scrollLine = document.querySelector(".scroll");

    container.addEventListener("wheel", (e) => {
        container.scrollLeft += e.deltaY;
        scrollLine.style.width = container.scrollLeft / 2 + "px";
    });
}