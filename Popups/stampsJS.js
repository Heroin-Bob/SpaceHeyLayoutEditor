var imgs = document.getElementsByTagName('img');

function showImages(category){
    for (var i = 0; i < imgs.length; i++){
            imgs[i].style.display = "none";
    }
    fetchImages(category);
}

function fetchImages(cat){
    for (var i = 0; i < imgs.length; i++){
        if (cat == "none"){
            if (imgs[i].outerHTML.includes("cat=") == false){
                imgs[i].style.display = "block";
            }  
        } else {
            if (imgs[i].outerHTML.includes(cat)){
                imgs[i].style.display = "block";
            }
        }
    }
}

window.onload = (event) => {
    document.getElementById("count").innerText = document.getElementById("count").innerText.replace("_count", imgs.length);
};