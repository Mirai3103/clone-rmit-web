const iconsData = [
    { name: "Architecture", path: "./assets/icon/Architecture.svg" },
    { name: "Art", path: "./assets/icon/Art.svg" },
    { name: "Aviation", path: "./assets/icon/Aviation.svg" },
    {
        name: "Biomedical sciences",
        path: "./assets/icon/Biomedical sciences.svg",
    },
    { name: "Building", path: "./assets/icon/Building.svg" },
    { name: "Business", path: "./assets/icon/Business.svg" },
    { name: "Communication", path: "./assets/icon/Communication.svg" },
    { name: "Design", path: "./assets/icon/Design.svg" },
    { name: "Education", path: "./assets/icon/Education.svg" },
    { name: "Engineering", path: "./assets/icon/Engineering.svg" },
    { name: "Environment", path: "./assets/icon/Environment.svg" },
    { name: "Fashion", path: "./assets/icon/Fashion.svg" },
    { name: "Health", path: "./assets/icon/Health.svg" },
    {
        name: "Information technology",
        path: "./assets/icon/Information technology.svg",
    },
    { name: "Law", path: "./assets/icon/Law.svg" },
    { name: "Media", path: "./assets/icon/Media.svg" },
    { name: "Property", path: "./assets/icon/Property.svg" },
    { name: "Psychology", path: "./assets/icon/Psychology.svg" },

    { name: "Science", path: "./assets/icon/Science.svg" },
    {
        name: "Social and community",
        path: "./assets/icon/Social and community.svg",
    },
];

const majorList = document.querySelector("#major__list");
let isExplain = false;
let renderAll = true;
/*
 *
 *@Author: Ngô Hữu Hoàng
 *
 */
const renderMajor = () => {
    let innerHtml = "";
    const renderIconsData = window.innerWidth >= 1024 || isExplain ? [...iconsData] : iconsData.slice(0, 4);

    renderIconsData.forEach((icon) => {
        innerHtml += `
        <div class="major__item">
        <img src="${icon.path}" alt="${icon.name}" class="major__icon" />
        <span class="major__name">${icon.name}</span>
        </div>
    `;
    });
    majorList.innerHTML = innerHtml;
};
let lastWidth = window.innerWidth;
renderMajor();
const adjustVideoHeight = () => {
    if (window.innerWidth < 1024) {
        let videoHeight = document.querySelector(".intro__video > video").offsetHeight;
        document.querySelector(".intro__container").style.height = `${videoHeight}px`;
    }
    if (window.innerWidth < 640) {
        document.querySelector(".intro__container").style.height = "";
    }
};
adjustVideoHeight();
window.onresize = () => {
    adjustVideoHeight();
    if (window.innerWidth < 1024) {
        if (lastWidth < 1024) return;
    } else {
        isExplain = false;
        if (lastWidth >= 1024) return;
        document.querySelector(".intro__container").style.height = ``;
    }
    renderMajor();
    lastWidth = window.innerWidth;
};

const onToggleMajorList = () => {
    isExplain = !isExplain;
    renderMajor();
};
