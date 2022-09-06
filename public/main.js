//

const all = document.getElementById("all");
const vector = document.getElementById("vector");
const raster = document.getElementById("raster");
const uiux = document.getElementById("uiux");
const printing = document.getElementById("printing");

//
const allTab = document.getElementsByClassName("all");
const vectorTab = document.getElementsByClassName("vector");
const rasterTab = document.getElementsByClassName("raster");
const uiuxTab = document.getElementsByClassName("uiux");
const printingTab = document.getElementsByClassName("printing");

all.addEventListener("click", () => {
    // console.log("click");
    allTab.classList.remove("show");
    printingTab.classList.add('show');
});
