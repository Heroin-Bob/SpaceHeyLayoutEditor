var imgs = "";

var currentCat = "";


window.onload = (event) => {
    imgs = document.getElementById("imageContainer").getElementsByTagName("img");
    document.getElementById("count").innerText = document.getElementById("count").innerText.replace("_count", imgs.length);
    for (var i = 0; i < imgs.length; i++) {
        var imgCat = imgs[i].getAttribute("cat");
        if (imgCat == null) {
            document.querySelector("#categoryList > li:nth-child(13) > p > span").innerText = parseInt(document.querySelector("#categoryList > li:nth-child(13) > p > span").innerText) + 1;
        } else {
            var selElement = "";
            var liSelector = 0;
            switch (imgCat) {
                case "anime":
                    liSelector = 0;
                    break;
                case "cartoons":
                    liSelector = 1;
                    break;
                case "cute":
                    liSelector = 2;
                    break;
                case "food":
                    liSelector = 3;
                    break;
                case "gaming":
                    liSelector = 4;
                    break;
                case "lgbtq":
                    liSelector = 5;
                    break;
                case "memes":
                    liSelector = 6;
                    break;
                case "pokemon":
                    liSelector = 7;
                    break;
                case "awareness":
                    liSelector = 8;
                    break;
                case "spooky":
                    liSelector = 9;
                    break;
                case "text":
                    liSelector = 10;
                    break;
                case "tv":
                    liSelector = 11;
                    break;
                case "remove":
                    liSelector = 13;
                    break;
            }
            selElement = document.querySelector("#categoryList > li:nth-child(" + (liSelector + 1) + ") > p > span");
            selElement.innerText = parseInt(selElement.innerText) + 1;
        }
    }
    document.getElementById("totalPages").innerText = totalPages;
};



const imagesPerPage = 50;
let currentPage = 1;


const imageContainer = document.getElementById('imageContainer');
var totalPages = "";



function updateButtons() {
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    if (currentPage == 1){prevPageButton.disabled = true} else {prevPageButton.disabled = false;}
    if (currentPage == totalPages){nextPageButton.disabled = true} else {nextPageButton.disabled = false}
}

let imagePosition = 0;

function pageinateImages() {
    for (var i = 0; i < catImageArr.length; i++){
        catImageArr[i].style.display = 'none';
    }

    const startIndex = (currentPage - 1) * imagesPerPage;
    console.log("currentpage = " + currentPage);
    const endIndex = startIndex + imagesPerPage;
    console.log(startIndex + " | " + endIndex);

    for (var i = imagePosition; i < catImageArr.length; i++){
        if (imagePosition >= startIndex && imagePosition < endIndex) {
            catImageArr[i].style.display = 'block';
            imagePosition++;
        } else {
            catImageArr[i].style.display = 'none';
        }

    }

    updateButtons();
    document.getElementById("currentPage").innerText = currentPage;
}


function nextPage(){
    if (currentPage < totalPages) {
        currentPage++;
        pageinateImages();
    }
}

function prevPage(){
    if (currentPage > 1) {
        currentPage--;
        imagePosition = imagesPerPage * (currentPage - 1);
        pageinateImages();
    }
}

var catImageArr = [];

function showImages(category) {
    catImageArr = [];
    imagePosition = 0;
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
        if (category == "none"){
            if (imgs[i].outerHTML.includes("cat=") == false) {
                catImageArr.push(imgs[i]);
            }
        }else{
            if (imgs[i].getAttribute("cat") == category){
                catImageArr.push(imgs[i]);
            }
        }
    }
    currentCat = category;
    fetchImages(category);
    totalPages = Math.ceil(catImageArr.length / imagesPerPage);
    currentPage = 1;
    pageinateImages();
    document.getElementById("totalPages").innerText = totalPages;
}

function fetchImages(cat) {
    for (var i = 0; i < imgs.length; i++) {
        if (cat == "none") {
            if (imgs[i].outerHTML.includes("cat=") == false) {
                imgs[i].style.display = "block";
            }
        } else {
            if (imgs[i].outerHTML.includes(cat)) {
                imgs[i].style.display = "block";
            }
        }
    }
}

function changeSize(change){
    for (var i = 0; i < imgs.length; i++){
        var currentWidth = imgs[i].width;
        var currentHeight = imgs[i].height;

        // Increase size by 10%
        if (change == '+'){
            var newWidth = currentWidth * 1.1;
            var newHeight = currentHeight * 1.1;
        } else {
            var newWidth = currentWidth * 0.9;
            var newHeight = currentHeight * 0.9;
        }
        

        // Apply the new size to the image
        imgs[i].style.width = newWidth + 'px';
        imgs[i].style.height = newHeight + 'px';
    }
}