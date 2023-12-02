function CSSReference(elem){
  var CSSoutStr = "";
  var HTMLoutStr = "";
  var outImg = "";
  var folder = "CSSElements/";
  switch (elem){
    case "varEnterLeaveSplash":
      CSSoutStr = "#splashprofile{\nz-index: 100;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: lightgreen;\n  left: 0;\n  top: 0;\n  width: 100%;\n  position: absolute;\n  height: 100vh;\n  opacity: 1;\n  transition: .2s;\n}\n\n#splashprofile:target {\n opacity: 0;\n visibility: hidden;\n}";
      HTMLoutStr = "<div id='splashprofile'>\n  <p>this is the overlay</p>\n  <a href='#splashprofile'>click to enter</a><br>\n  <a href='https://www.spacehey.com/home'>click to not enter</a>\n</div>";
      PreviewOutStr = "<style>" + "#splashprofile{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: lightgreen;\n  left: 0;\n  top: 0;\n  width: 100%;\n  position: relative;\n  height: 100%;\n  opacity: 1;\n  transition: .2s;\n}\n\n#splashprofile:target {\n opacity: 0;\n visibility: hidden;\n}" + "</style>" + HTMLoutStr;
      break;
    case "varRecordPlayer":
      CSSoutStr = "  @keyframes spin {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  .vinyl {\n    animation: spin 3s linear infinite;\n    height: 150px;\n    margin-left: 55px;\n    padding: 0px;\n    position: absolute;\n  }\n  .vinylRecord {\n    height: 150px;\n    padding: 0px;\n    position: relative;\n    z-index: 1;\n    margin-right: 55px;\n  }\n  .recordPlayer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }";
      HTMLoutStr = "<div class='recordPlayer'>\n  <img class='vinyl' src='https://i.ibb.co/xqbZjv3/vinyl-black-1.png' />\n  <img class='vinylRecord' src='https://i.ibb.co/PxSdL3D/81a-ECQl-JWw-L-UF894-1000-QL80.jpg' />\n</div>";
      PreviewOutStr = "<style>" + CSSoutStr + "</style>" + HTMLoutStr;
      break;
    case "varRainbowText":
      CSSoutStr = ".rainbow {\n  background: -webkit-linear-gradient(\n    -35deg,\n    #FFFF00,\n    #00FFFF,\n    #0000FF,\n    #FF0000\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  display: inline;\n}";
      HTMLoutStr = "<p class='rainbow'>This is the Rainbow Text</p>";
      PreviewOutStr = "<style>" + CSSoutStr + "</style>" + "<p class='rainbow' style='font-size:45px'>This is the Rainbow Text</p>";
      break;
    case "varRainbowUnderline":
      CSSoutStr = ".rainbowUnderline {\n display: inline;\n text-decoration: none;\n  background-position: 0 1.01em;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  transition: background 0.5s;\n  background-image: linear-gradient(\n    110deg,\n    #FFFF00,\n    #00FFFF,\n    #0000FF,\n    #FF0000\n  );\n}";
      HTMLoutStr = "<p class='rainbowUnderline'>This is the Rainbow Underline</p>";
      PreviewOutStr = "<style>" + CSSoutStr + "</style>" + "<p class='rainbowUnderline' style='font-size:45px;'>This is the Rainbow Underline</p>";
      break;
    case "varRainbowPan":
      CSSoutStr = ".rainbowPan {\ndisplay:inline;\n  animation: myRainbowPan 1s infinite;\n}\n\n@keyframes myRainbowPan {\n  0% {\n    background: -webkit-linear-gradient(\n      45deg,\n      #FFFF00,\n      #00FFFF,\n      #0000FF,\n      #FF0000\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  25% {\n    background: -webkit-linear-gradient(\n      45deg,\n      #00FFFF,\n      #0000FF,\n      #FF0000,\n      #FFFF00\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  50% {\n    background: -webkit-linear-gradient(\n      45deg,\n      #0000FF,\n      #FF0000,\n      #FFFF00,\n      #00FFFF\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  75% {\n    background: -webkit-linear-gradient(\n      45deg,\n      #FF0000,\n      #FFFF00,\n      #00FFFF,\n      #0000FF\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  100% {\n    background: -webkit-linear-gradient(\n      45deg,\n      #FFFF00,\n      #00FFFF,\n      #0000FF,\n      #FF0000\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n}";
      HTMLoutStr = "<p class='rainbowPan'>This is the Rainbow Pan</p>";
      PreviewOutStr = "<style>" + CSSoutStr + "</style>" + "<p class='rainbowPan' style='font-size:45px'>This is the Rainbow Pan</p>";
      break;
    case "varRainbowFlash":
      CSSoutStr = ".rainbowFlash {\n  display: inline;\n animation: myRainbow 2s linear infinite;\n}\n\n@keyframes myRainbow {\n  0% {\n    color: #FFFF00;\n  }\n  25% {\n    color: #00FFFF;\n  }\n  50% {\n    color: #0000FF;\n  }\n  75% {\n    color: #FF0000;\n  }\n  100% {\n    color: #FFFF00;\n  }\n}";
      HTMLoutStr = "<p class='rainbowFlash'>This is the Rainbow Flash</p>";
      PreviewOutStr = "<style>" + CSSoutStr + "</style>" + "<p class='rainbowFlash' style='font-size:45px'>This is the Rainbow Flash</p>";
      break;
    case "varRainbowFlashShadow":
      CSSoutStr = ".rainbowFlashShadow {\ndisplay:inline;\n  color: inherit;\n  animation: myRainbowShadow 2s linear infinite;\n}\n\n@keyframes myRainbowShadow {\n  0% {\n    text-shadow: 0 0 5px #FFFF00;\n  }\n  25% {\n    text-shadow: 0 0 5px #00FFFF;\n  }\n  50% {\n    text-shadow: 0 0 5px #0000FF;\n  }\n  75% {\n    text-shadow: 0 0 5px #FF0000;\n  }\n  100% {\n    text-shadow: 0 0 5px #FFFF00;\n  }\n}";
      HTMLoutStr = "<p class='rainbowFlashShadow'>This is the Rainbow Flash Shadow</p>";
      PreviewOutStr = "<style>" + CSSoutStr + "</style>" + "<p class='rainbowFlashShadow' style='font-size:45px'>This is the Rainbow Flash Shadow</p>";
      break;
    case "varRainbowBlink":
      CSSoutStr = ".rainbowBlink {\n display:inline;  animation: myRainbowBlink 0.3s infinite;\n}\n\n@keyframes myRainbowBlink {\n  0% {\n    color: inherit;\n  }\n  50% {\n    background: -webkit-linear-gradient(\n      45deg,\n      #FFFF00,\n      #00FFFF,\n      #0000FF,\n      #FF0000\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n}";
      HTMLoutStr = "<p class='rainbowBlink'>This is the Rainbow Blink</p>";
      PreviewOutStr = "<style>" + CSSoutStr + "</style>" + "<p class='rainbowBlink' style='font-size:45px'>This is the Rainbow Blink</p>";
      break;
    case "varRainbowBlinkPan":
      CSSoutStr = ".rainbowBlinkPan {\n display:inline; \n animation: myRainbowBlinkPan 2s infinite;\n}\n\n@keyframes myRainbowBlinkPan {\n  0% {\n    background: -webkit-linear-gradient(\n      45deg,\n      #FFFF00,\n      #00FFFF,\n      #0000FF,\n      #FF0000\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  12.5% {\n    background: 0 0;\n    -webkit-background-clip: none;\n    -webkit-text-fill-color: inherit;\n  }\n  25% {\n    background: -webkit-linear-gradient(\n      45deg,\n      #00FFFF,\n      #0000FF,\n      #FF0000,\n      #FFFF00\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  37.5% {\n    background: 0 0;\n    -webkit-background-clip: none;\n    -webkit-text-fill-color: inherit;\n  }\n  50% {\n    background: -webkit-linear-gradient(\n      45deg,\n      #0000FF,\n      #FF0000,\n      #FFFF00,\n      #00FFFF\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  62.5% {\n    background: 0 0;\n    -webkit-background-clip: none;\n    -webkit-text-fill-color: inherit;\n  }\n  75% {\n    background: -webkit-linear-gradient(\n      45deg,\n      #FF0000,\n      #FFFF00,\n      #00FFFF,\n      #0000FF\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  87.5% {\n    background: 0 0;\n    -webkit-background-clip: none;\n    -webkit-text-fill-color: inherit;\n  }\n  100% {\n    background: -webkit-linear-gradient(\n      45deg,\n      #FFFF00,\n      #00FFFF,\n      #0000FF,\n      #FF0000\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n}";
      HTMLoutStr = "<p class='rainbowBlinkPan'>This is the Rainbow Blink Pan</p>";
      PreviewOutStr = "<style>" + CSSoutStr + "</style>" + "<p class='rainbowBlinkPan' style='font-size:45px'>This is the Rainbow Blink Pan</p>";
      break;
    case "varBaseImage":
      CSSoutStr = "";
      HTMLoutStr = "<div style='max-height: 300px; position: fixed; left: 1px; bottom: 0px; z-index: 400;'>\n<img src='https://i.ibb.co/XyrR0st/168459.gif' height='200' loading='lazy'></div>";
      PreviewOutStr = HTMLoutStr;
      break;
    case "template":
      CSSoutStr = "";
      HTMLoutStr = "";
      PreviewOutStr = "";
      break;
  }

  document.getElementById("CSSOutputText").value = CSSoutStr;
  document.getElementById("HTMLOutputText").value = HTMLoutStr;
  document.getElementById("snippetPreview").innerHTML = PreviewOutStr;
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
