function updateProfile() {
  var boxes = document.getElementsByClassName("CodeMirror");
  var codeBox = "";
  var CSSCode = "",
    aboutmeCode = "",
    meetCode = "",
    generalCode = "",
    musicCode = "",
    moviesCode = "",
    tvCode = "",
    booksCode = "",
    heroesCode = "";
  var x = 0;

  //CSS
  

  document.querySelector(".blurbs > div.inner > div:nth-child(1)").innerHTML = "<h4>About me:</h4>" + "<style>" + CSSeditor.getValue() + "</style>" + aboutMeeditor.getValue();


  //Who I'd Like To Meet
  document.querySelector("#previewContainer > div > main > div > div.col.right > div.blurbs > div.inner > div:nth-child(2)").innerHTML = "<h4>Who I'd like to meet:</h4>" + meeteditor.getValue();

  //General
  document.querySelector("#previewContainer > div > main > div > div.col.w-40.left > div:nth-child(6) > div.inner > table > tbody > tr:nth-child(1) > td:nth-child(2)").innerHTML = generaleditor.getValue();

  //Music
  document.querySelector("#previewContainer > div > main > div > div.col.w-40.left > div:nth-child(6) > div.inner > table > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML = musiceditor.getValue();

  //Movies
  document.querySelector("#previewContainer > div > main > div > div.col.w-40.left > div:nth-child(6) > div.inner > table > tbody > tr:nth-child(3) > td:nth-child(2)").innerHTML = moviesCode;

  //TV
  document.querySelector("#previewContainer > div > main > div > div.col.w-40.left > div:nth-child(6) > div.inner > table > tbody > tr:nth-child(4) > td:nth-child(2)").innerHTML = tvCode;

  //Books
  document.querySelector("#previewContainer > div > main > div > div.col.w-40.left > div:nth-child(6) > div.inner > table > tbody > tr:nth-child(5) > td:nth-child(2)").innerHTML = booksCode;

  //Heroes
  document.querySelector("#previewContainer > div > main > div > div.col.w-40.left > div:nth-child(6) > div.inner > table > tbody > tr:nth-child(6) > td:nth-child(2)").innerHTML = heroesCode;

  document.getElementById("updateBar").getElementsByTagName("li:hover")[1].style.color = "#90ee90";
}
