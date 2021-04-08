function ChangeGallery(galleryName) {
    let e2020_2021 = document.getElementById("year2020-2021");
    let e2019_2020 = document.getElementById("year2019-2020");
    
    if (galleryName == "2020-2021") {
        e2020_2021.style.visibility = "visible";
        e2020_2021.style.display = "block";
        e2019_2020.style.visibility = "hidden";
        e2019_2020.style.display = "none";
    }
    
    if (galleryName == "2019-2020") {
        e2020_2021.style.visibility = "hidden";
        e2020_2021.style.display = "none";
        e2019_2020.style.visibility = "visible";
        e2019_2020.style.display = "block";
    }
};