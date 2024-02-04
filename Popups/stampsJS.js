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
            catImageArr[i].style.width = 99 + sizeModifier + "px";
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
    hideCopyNotif();
}

function prevPage(){
    if (currentPage > 1) {
        currentPage--;
        imagePosition = imagesPerPage * (currentPage - 1);
        pageinateImages();
    }
    hideCopyNotif();
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
    hideCopyNotif();
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
    hideCopyNotif();
}

var sizeModifier = 0;

function changeSize(change){

    if (change == '+'){
        sizeModifier = sizeModifier + 10;
    } else {
        sizeModifier = sizeModifier - 10;
    }
    if (sizeModifier < 0){sizeModifier = 0;}
    console.log(sizeModifier);
    for (var i = 0; i < imgs.length; i++){

        var currentWidth = imgs[i].width;
        var currentHeight = imgs[i].height;
        var newWidth = "";
        var newHeight = "";

        if (currentWidth != 0){
            if (change == '+'){
                newWidth = 99 + sizeModifier;
            } else {
                newWidth = currentWidth - 10;
            }
        }
        // Increase size by 10%
        
        
        // Apply the new size to the image
        imgs[i].style.width = newWidth + "px";
        imgs[i].style.height = newHeight + "px";
        

    }

    hideCopyNotif();
}

function removePopup(){
    document.querySelector("body > div.infoPopup").style.top = "-1000px";
}


document.addEventListener("DOMContentLoaded", function() {
    var categoryListItems = document.querySelectorAll("#categoryList li");

    categoryListItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Remove 'active' class from all items
            categoryListItems.forEach(function(item) {
                item.classList.remove("active");
            });

            // Add 'active' class to the clicked item
            this.classList.add("active");
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkCopyImg');
    const images = document.querySelectorAll('#imageContainer img');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            images.forEach(img => {
                img.addEventListener('click', copyImageTag);
            });
        } else {
            images.forEach(img => {
                img.removeEventListener('click', copyImageTag);
            });
            hideCopyNotif();
        }
    });

    function copyImageTag(event) {
        const imgTag = `<img src="${event.target.src}" alt="${event.target.alt}">`;
        
        var thisL = this.offsetLeft;
        var thisT = this.offsetTop;
        var thisH = this.offsetHeight;
        var thisW = this.offsetWidth;



        console.log(thisL + "," + thisT  + "," +  thisH + "," + thisW)

        navigator.clipboard.writeText(imgTag).then(function() {
            const copyNotif = document.getElementById("copyNotif");
            copyNotif.style.left = thisL + "px";
            copyNotif.style.top = thisT + "px";
            copyNotif.style.height = thisH + "px";
            copyNotif.style.width = thisW + "px";
            console.log('Image tag copied to clipboard:', imgTag);
        }, function() {
            console.error('Failed to copy image tag to clipboard');
        });
    }
});

function hideCopyNotif(){
    document.getElementById("copyNotif").style.top = "-9999px";
}
