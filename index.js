let video = document.getElementById("video-intro");
window.onload = function () {
    setTimeout(() => video.play(), 2000);
};
/*
 *
 *@Author: Ngô Hữu Hoàng
 *
 */
document.querySelector(".dropdown__item.dropdown__item--show").addEventListener("mouseover", function () {
    document.querySelector(".dropdown__item.dropdown__item--show i").style.transform = "rotate(180deg)";
});
document.getElementsByClassName("header__oversize__dropdown-menu")[0].addEventListener("mouseout", function () {
    document.querySelector(".dropdown__item.dropdown__item--show i").style.transform = "none";
});
const pauseIcon = `<i class="fa-solid fa fa-pause"></i>`;
const playIcon = `<i class="fa-solid fa fa-play"></i>`;
document.querySelector(".intro__video--icon").addEventListener("click", function () {
    if (video.paused) {
        video.play();
        document.querySelector(".intro__video--icon").innerHTML = pauseIcon;
    } else {
        video.pause();
        document.querySelector(".intro__video--icon").innerHTML = playIcon;
    }
});

const handleToggleExpland = (e) => {
    e.currentTarget.classList.toggle("show");
    console.log(e.currentTarget);
};
