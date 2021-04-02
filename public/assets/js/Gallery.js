function ChangeGallery(galleryName) {
    let e2020_2021 = document.getElementById("year2020-2021");
    let e2019_2020 = document.getElementById("year2019-2020");
    
    if (galleryName == "2020-2021") {
        e2020_2021.style.display = "block";
        e2020_2021.classList += " active";
        e2019_2020.style.display = "none";
        e2019_2020.classList.remove("active")
    }
    
    if (galleryName == "2019-2020") {
        e2020_2021.style.display = "none";
        e2020_2021.classList.remove("active");
        e2019_2020.style.display = "block";
        e2019_2020.classList += " active";
    }
};