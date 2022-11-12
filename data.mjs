import fs from "fs";
import path from "path";

const iconsData = [];
/*
 *
 *@Author: Ngô Hữu Hoàng
 *
 */
fs.readdirSync("./assets/icon").forEach((file) => {
    const name = path.parse(file).name;
    const iconsPath = "./assets/icon/" + file;

    iconsData.push({
        name,
        path: iconsPath,
    });
});

console.log(JSON.stringify(iconsData));
