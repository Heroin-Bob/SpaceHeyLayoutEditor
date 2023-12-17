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

  var pageSelect = document.getElementById("designOption").value;

  switch(pageSelect){
    case "Profile":
        //CSS
      document.querySelector(".blurbs > div.inner > div:nth-child(1)").innerHTML = "<h4>About me:</h4>" + "<style>" + CSSeditor.getValue() + "</style>" + aboutMeeditor.getValue();


      //Who I'd Like To Meet
      document.querySelector("#previewContainer > div > main > div > div.col.right > div.blurbs > div.inner > div:nth-child(2)").innerHTML = "<h4>Who I'd like to meet:</h4>" + meeteditor.getValue();

      //General
      document.querySelector("#previewContainer > div > main > div > div.col.w-40.left > div:nth-child(6) > div.inner > table > tbody > tr:nth-child(1) > td:nth-child(2)").innerHTML = generaleditor.getValue();

      //Music
      document.querySelector("#previewContainer > div > main > div > div.col.w-40.left > div:nth-child(6) > div.inner > table > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML = musiceditor.getValue();

      //Movies
      document.querySelector("#previewContainer > div > main > div > div.col.w-40.left > div:nth-child(6) > div.inner > table > tbody > tr:nth-child(3) > td:nth-child(2)").innerHTML = movieseditor.getValue();

      //TV
      document.querySelector("#previewContainer > div > main > div > div.col.w-40.left > div:nth-child(6) > div.inner > table > tbody > tr:nth-child(4) > td:nth-child(2)").innerHTML = tveditor.getValue();

      //Books
      document.querySelector("#previewContainer > div > main > div > div.col.w-40.left > div:nth-child(6) > div.inner > table > tbody > tr:nth-child(5) > td:nth-child(2)").innerHTML = bookseditor.getValue();

      //Heroes
      document.querySelector("#previewContainer > div > main > div > div.col.w-40.left > div:nth-child(6) > div.inner > table > tbody > tr:nth-child(6) > td:nth-child(2)").innerHTML = heroeseditor.getValue();

      //document.getElementById("updateBar").getElementsByTagName("li:hover")[1].style.color = "#90ee90";

      const boxArr = [CSSeditor.getValue(), aboutMeeditor.getValue(), meeteditor.getValue(), generaleditor.getValue(), musiceditor.getValue(), movieseditor.getValue(), tveditor.getValue(), bookseditor.getValue(), heroeseditor.getValue()];
      setCookie('layoutCookie', JSON.stringify(boxArr), 90);
      break;
    case "Blog":
        //CSS
        document.querySelector("#previewContainer > div > main > div > div.col.right > div.content").innerHTML = "<style>" + CSSeditor.getValue() + "</style>" + blogeditor.getValue();
      break;
    case "Bulletin":
      document.querySelector("#previewContainer > div > main > div > div.col.right > div.content").innerHTML = "<style>" + CSSeditor.getValue() + "</style>" + bulletineditor.getValue();
      break;
    case "Group":
      document.querySelector("#previewContainer > div > main > div > div.col.w-75.group-right > p.description").innerHTML = "<style>" + CSSeditor.getValue() + "</style>" + groupeditor.getValue();
      break;
  }
  

}

function setCookie(name, value, daysToExpire) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  const cookieValue = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; path=/';
  document.cookie = cookieValue;
}


// Global variable to hold updateTime in seconds
var updateTime = parseInt(document.getElementById('updateTimerValue').value); // You can set the initial value as needed
var updateIntervalId;

// Function to start or stop the updateProfile() function based on checkbox state
function toggleUpdate() {
  var checkbox = document.getElementById('updateTimerCheckbox');
  var input = document.getElementById('updateTimerValue');

  if (checkbox.checked) {
    // Start updating profile every updateTime seconds
    updateTime = parseInt(input.value) || updateTime; // Use the input value if present, otherwise use the current value
    updateProfile(); // Call initially
    updateIntervalId = setInterval(updateProfile, updateTime * 1000); // Convert seconds to milliseconds
    input.disabled = false; // Enable the input
  } else {
    // Stop updating profile
    clearInterval(updateIntervalId);
    input.disabled = true; // Disable the input
  }
}