function CSSReference(elem){
  var CSSoutStr = "";
  var HTMLoutStr = "";
  var outImg = "";
  var folder = "CSSElements/";
  switch (elem){
    case "varTemplateDarkGray":
      outStr = ":root {\n--themecolor5: #999999;\n--themecolor4: #777777;\n--themecolor3: #555555;\n--themecolor2: #333333;\n--themecolor1: #111111;\n}\n\n  body{\n    background: var(--themecolor1);\n  }\n\n  main{\n    background: var(--themecolor2);\n  }\n\n  p{\n    color: var(--themecolor5);\n  }\n\n  h1{\n    color: var(--themecolor5);\n  }\n\n  h4{\n    color: var(--themecolor4) !important;\n  }\n\n  a{\n    color: var(--themecolor4) !important;\n  }\n\n  .heading{\n    background: var(--themecolor3) !important;\n  }\n\n  .contact, .url-info, .table-section{\n    border: 2px solid var(--themecolor3) !important;\n  }\n\n  .comments-table{\n    border: var(--themecolor3);\n  }\n\n  .comments-table tr td{\n    background: var(--themecolor4) !important;\n  }\n  .comments-table p {\n    color: var(--themecolor1);\n  }\n\n  .profile-info .inner{\n    color: var(--themecolor5);\n  }\n\n  .profile-info{\n    border: 2px solid var(--themecolor4);\n  }\n\n  .details-table tr td{\n    background: var(--themecolor3) !important;\n    color: var(--themecolor5) !important;\n  }\n\n  .count {\n    color: var(--themecolor4);\n  }\n\n  footer, nav .top{\n    background: var(--themecolor2) !important;\n  }\n\n  nav .links{\n    background: var(--themecolor3);\n  }\n\n  .comment-replies{\n    border: 4px solid var(--themecolor5);\n  }\n  ";
      outImg = "Template_DarkMode_Gray.png";
      break;
    case "varEnterLeaveSplash":
      CSSoutStr = "#splashprofile{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: lightgreen;\n  left: 0;\n  top: 0;\n  width: 100%;\n  position: absolute;\n  height: 100vh;\n  opacity: 1;\n  transition: .2s;\n}\n\n#splashprofile:target {\n opacity: 0;\n visibility: hidden;\n}";
      HTMLoutStr = "<div id='splashprofile'>\n  <p>this is the overlay</p>\n  <a href='#splashprofile'>click to enter</a><br>\n  <a href='https://www.spacehey.com/home'>click to not enter</a>\n</div>";
      outImg = "snippet_overlay.png";
      break;
  }

  document.getElementById("CSSOutputText").value = CSSoutStr;
  document.getElementById("HTMLOutputText").value = HTMLoutStr;
  if (outImg != ""){
    document.getElementById("elementImg").style.opacity = 1.0;

    const img = document.getElementById("elementImg");
    img.onload = function() {
      if (this.width > this.height){

      }
    }
    document.getElementById("elementImg").src = folder + outImg;
  } else {
    document.getElementById("elementImg").style.opacity = 0;
  }
}
