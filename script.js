function openPopup(popup){
  switch(popup){
    case "roadmap":
      document.getElementById("roadmapPopup").style.top = "0px";
      break;
    case "quickcss":
      document.getElementById("quickCSSPopup").style.top = "0px";
      break;
  }
}

function closePopup(){
  var popups = document.getElementsByClassName("popup");
  for (var i = 0; i < popups.length; i++){
    popups[i].style.top = "-9999px";
  }
}

document.onkeydown = KeyPress;

function KeyPress(e) {
  var evtobj = window.event ? event : e;
  if (evtobj.keyCode == 83 && evtobj.altKey) updateProfile();
}


function copyText(box) {
  var copyText = "";

  if (box == "aboutMe") {

    var outStr = '<style>\n' +
      CSSeditor.getValue() +
      '\n</style>\n\n' +
      aboutMeeditor.getValue();

    var el = document.createElement('textarea');
    el.value = outStr;
    el.setAttribute('readonly', '');
    el.style = {
      position: 'absolute',
      left: '-9999px'
    };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

  } else {
    switch (box) {
      case "meet":
        copyText = meeteditor.getValue();
        break;
      case "general":
        copyText = generaleditor.getValue();
        break;
      case "music":
        copyText = musiceditor.getValue();
        break;
      case "movies":
        copyText = movieseditor.getValue();
        break;
      case "television":
        copyText = tveditor.getValue();
        break;
      case "books":
        copyText = bookseditor.getValue();
        break;
      case "heroes":
        copyText = heroeseditor.getValue();
        break;
      case "css":
        copyText = CSSeditor.getValue();
        break;
      case "quickCSS":
        copyText = document.getElementById("CSSOutputText").value;
        break;
      case "quickHTML":
        copyText = document.getElementById("HTMLOutputText").value;
        break;
      case "blog":
        var outStr = '<style>\n' +
        CSSeditor.getValue() +
        '\n</style>\n\n' +
        blogeditor.getValue();

        copyText = outStr;
        break;
      case "bulletin":
        var outStr = '<style>\n' +
        CSSeditor.getValue() +
        '\n</style>\n\n' +
        bulletineditor.getValue();

        outStr = outStr.replace(/\n/g, "");
        copyText = outStr;
        break;
    }

    if (copyText != "") {
      var el = document.createElement('textarea');
      el.value = copyText;
      el.setAttribute('readonly', '');
      el.style = {
        position: 'absolute',
        left: '-9999px'
      };
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  }
}

function randomNum(min, max){
  var val = Math.floor(Math.random() * max) + min;
  return(val);
}

function themeMix(){
  var color1 = document.getElementById("color1").value;
  var color2 = document.getElementById("color2").value;
  var color3 = document.getElementById("color3").value;
  var color4 = document.getElementById("color4").value;
  var color5 = document.getElementById("color5").value;

  var numArr = [1,2,3,4,5];
  var ranNum = randomNum(1,5);
  var num1 = ranNum;
  delete numArr[ranNum-1];
  while (numArr.indexOf(ranNum) == -1){
    ranNum = randomNum(1,5);
  }
  var num2 = ranNum;

  delete numArr[ranNum-1];
  numArr.indexOf(ranNum);
  while (numArr.indexOf(ranNum) == -1){
    ranNum = randomNum(1,5);
  }
  var num3 = ranNum;

  delete numArr[ranNum-1];
  while (numArr.indexOf(ranNum) == -1){
    ranNum = randomNum(1,5);

  }
  var num4 = ranNum;

  delete numArr[ranNum-1];
  while (numArr.indexOf(ranNum) == -1){
    ranNum = randomNum(1,5);
  }
  var num5 = ranNum;

  var themeStr = ":root {\n" +
  "--themecolor" + num1 + ": #" + color1 + ";\n" +
  "--themecolor" + num2 + ": #" + color2 + ";\n" +
  "--themecolor" + num3 + ": #" + color3 + ";\n" +
  "--themecolor" + num4 + ": #" + color4 + ";\n" +
  "--themecolor" + num5 + ": #" + color5 + ";\n" +
  "}\n";
  

  var outStr = themeStr +
  `
  body{
    background: var(--themecolor1);
  }

  main{
    background: var(--themecolor2);
  }

  p{
    color: var(--themecolor5);
  }

  h1{
    color: var(--themecolor5);
  }

  h4{
    color: var(--themecolor4) !important;
  }

  a{
    color: var(--themecolor4) !important;
  }

  .heading{
    background: var(--themecolor3) !important;
  }

  .contact, .url-info, .table-section{
    border: 2px solid var(--themecolor3) !important;
  }

  .comments-table{
    border: var(--themecolor3);
  }

  .comments-table tr td{
    background: var(--themecolor4) !important;
  }
  .comments-table p {
    color: var(--themecolor1);
  }

  .profile-info .inner{
    color: var(--themecolor5);
  }

  .profile-info{
    border: 2px solid var(--themecolor4);
  }

  .details-table tr td{
    background: var(--themecolor3) !important;
    color: var(--themecolor5) !important;
  }

  .count {
    color: var(--themecolor4);
  }

  footer, nav .top{
    background: var(--themecolor2) !important;
  }

  nav .links{
    background: var(--themecolor3);
  }

  .comment-replies{
    border: 4px solid var(--themecolor5);
  }
  `;

  CSSeditor.setValue(outStr);
  updateProfile();


}

function copyMin() {
  var str = CSSeditor.getValue();
  str = str.split("\n").join("\\" + "n");

  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = {
    position: 'absolute',
    left: '-9999px'
  };
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

//cookie stuff



// Example usage:
// setCookie('layoutCookie', 'Hello, Cookie!', 90);


function resizeButtonToggle() {
  const button = document.getElementById('paneSizeButton');
  const container = document.getElementById('previewContainer');
  container.classList.toggle('hideAfter');
  if (button.innerHTML === '<i class="fa fa-angle-double-left"></i>') {
      button.innerHTML = '<i class="fa fa-angle-double-right"></i>';
      document.getElementById("editorContainer").style.width = "0px";
      document.getElementById("previewContainer").style.width = "100%";
  } else {
      button.innerHTML = '<i class="fa fa-angle-double-left"></i>';
      document.getElementById("editorContainer").style.width = "30%";
      document.getElementById("previewContainer").style.width = "70%";
  }
}



/*
below text is solely for the hover function
*/

let highlightEnabled = false;

function toggleHighlightFunction() {
    highlightEnabled = document.getElementById('toggleFunction').checked;
}

document.addEventListener('mouseover', function (event) {
    if (highlightEnabled) {
        const hoveredElement = event.target;

        // Check if the hovered element is not the checkbox
        if (hoveredElement.id !== 'toggleFunction') {
            // Add red border to the hovered element
            hoveredElement.classList.add('highlight');
        }
    }
});

document.addEventListener('mouseout', function (event) {
    if (highlightEnabled) {
        const hoveredElement = event.target;

        // Remove red border when mouse leaves the element
        hoveredElement.classList.remove('highlight');
    }
});

document.addEventListener('click', function (event) {
    if (highlightEnabled) {
        const clickedElement = event.target;

        // Check if the clicked element is not the checkbox
        if (clickedElement.id !== 'toggleFunction') {
            // Get the CSS selector of the clicked element and its first parent element
            const cssSelector = getFullCssSelector(clickedElement);

            // Copy the CSS selector to the clipboard
            copyToClipboard(cssSelector);

            // Turn off the function, remove the highlight, and uncheck the checkbox
            highlightEnabled = false;
            clickedElement.classList.remove('highlight');
            document.getElementById('toggleFunction').checked = false;
        }
    }
});

// Function to get the full CSS selector of an element
function getFullCssSelector(element) {
    const selectorParts = [];

    // Get the CSS selector of the clicked element
    const selector = getCssSelector(element);
    if (selector) {
        selectorParts.push(selector);
    }

    // Get the CSS selector of the first parent element
    const parentSelector = getCssSelector(element.parentElement);
    if (parentSelector) {
        selectorParts.unshift(parentSelector);
    }

    return selectorParts.join(' ');
}

// Function to get the CSS selector of an element
function getCssSelector(element) {
    if (!element) return '';
    const selector = element.tagName.toLowerCase();
    if (element.id) {
        return `#${element.id}`;
    }
    if (element.className) {
        return `.${element.className.replace(/\s+/g, '.')}`;
    }
    return selector;
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    text = text.replace(".highlight","");
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}