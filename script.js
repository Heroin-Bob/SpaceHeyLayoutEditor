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
