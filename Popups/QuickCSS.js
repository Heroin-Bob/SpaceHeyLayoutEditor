function CSSReference(elem) {
  var CSSoutStr = "";
  var HTMLoutStr = "";
  var PreviewOutStr = "";
  var outImg = "";
  var folder = "CSSElements/";
  switch (elem) {
    case "varEnterLeaveSplash":
      CSSoutStr = "#splashprofile{\nz-index: 100;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: lightgreen;\n  left: 0;\n  top: 0;\n  width: 100%;\n  position: absolute;\n  height: 100vh;\n  opacity: 1;\n  transition: .2s;\n}\n\n#splashprofile:target {\n opacity: 0;\n visibility: hidden;\n}";
      HTMLoutStr = "<div id='splashprofile'>\n  <p>this is the overlay</p>\n  <a href='#splashprofile'>click to enter</a><br>\n  <a href='https://www.spacehey.com/home'>click to not enter</a>\n</div>";
      PreviewOutStr = "<style>" + "#splashprofile{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: lightgreen;\n  left: 0;\n  top: 0;\n  width: 100%;\n  position: relative;\n  height: 100%;\n  opacity: 1;\n  transition: .2s;\n}\n\n#splashprofile:target {\n opacity: 0;\n visibility: hidden;\n}" + "</style>" + HTMLoutStr;
      break;
    case "varRecordPlayer":
      CSSoutStr = "  @keyframes spin {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  .vinyl {\n    animation: spin 3s linear infinite;\n    width: 150px;\n    margin-left: 55px;\n    padding: 0px;\n    position: absolute;\n  }\n  .vinylRecord {\n    height: 150px;\n    padding: 0px;\n    position: relative;\n    z-index: 1;\n    margin-right: 55px;\n  }\n  .recordPlayer {\nposition: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }";
      HTMLoutStr = "<div class='recordPlayer'>\n  <img class='vinyl' src='https://i.ibb.co/xqbZjv3/vinyl-black-1.png' />\n  <img class='vinylRecord' src='https://i.ibb.co/PxSdL3D/81a-ECQl-JWw-L-UF894-1000-QL80.jpg' />\n</div>";
      PreviewOutStr = "<p>Thank you <a href='https://murgn.neocities.org/secretsociety'>Morgan</a> for the design.</p><br><style>" + CSSoutStr + "</style>" + HTMLoutStr;
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
      HTMLoutStr = "<div style='max-height: 300px; position: fixed; left: 1px; bottom: 0px; z-index: 99;'>\n<img src='https://i.ibb.co/XyrR0st/168459.gif' height='200' loading='lazy'></div>";
      PreviewOutStr = HTMLoutStr;
      break;
    case "varYoutubeAutoplay":
      CSSoutStr = "";
      HTMLoutStr = "";
      PreviewOutStr = "<p style='font-size:20px;'>Enter the link to the YouTube video you would like to autoplay:</p><input type='text' id='youtubeURL' style='width: 200px;'>\n<button id='youtubeGenButton' onclick='genEmbed()' style='width: 100px;'>Generate</button>";
      break;
    case "varGlitchText":
      CSSoutStr = ".glitch {\n    animation: glitch 3s steps(100) infinite;\n}\n@keyframes glitch {\n    0% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    1% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    2% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    3% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    4% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    5% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    6% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    7% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    8% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    9% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    10% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    11% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    12% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    13% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    14% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0);\n    }\n    15% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0);\n    }\n    16% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    17% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    18% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    19% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    20% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    21% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0);\n    }\n    22% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0);\n    }\n    23% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0);\n    }\n    24% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0);\n    }\n    25% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0);\n    }\n    26% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    27% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    28% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0);\n    }\n    29% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0);\n    }\n    30% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0);\n    }\n    31% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    32% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    33% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    34% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    35% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    36% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    37% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    38% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    39% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    40% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    41% {\n        text-shadow: 45px 0 0 #0c33f5, -45px 0 0 lime;\n        filter: blur(0);\n    }\n    42% {\n        text-shadow: 0 0 0 #0c33f5, 0 0 0 lime;\n        filter: blur(0);\n    }\n    43% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0);\n    }\n    44% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0);\n    }\n    45% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0);\n    }\n    46% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    47% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    48% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    49% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    50% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    51% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    52% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    53% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    54% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    55% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0.5px);\n    }\n    56% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0.5px);\n    }\n    57% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0.5px);\n    }\n    58% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    59% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    60% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    61% {\n        text-shadow: 30px 0 0 red, -30px 0 0 lime;\n        filter: blur(0);\n    }\n    62% {\n        text-shadow: 0 0 0 red, 0 0 0 lime;\n        filter: blur(0);\n    }\n    63% {\n        text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    64% {\n        text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    65% {\n        text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    66% {\n        text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5;\n        filter: blur(0.5px);\n    }\n    67% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0.5px);\n    }\n    68% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    69% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    70% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    71% {\n        text-shadow: 50px 0 0 red, -50px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    72% {\n        text-shadow: 0 0 0 red, 0 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    73% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    74% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    75% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    76% {\n        text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    77% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    78% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    79% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    80% {\n        text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    81% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0);\n    }\n    82% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0);\n    }\n    83% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    84% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    85% {\n        text-shadow: 1px 0 0 red, -1px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    86% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    87% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0.5px);\n    }\n    88% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    89% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    90% {\n        text-shadow: -3px 0 0 red, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    91% {\n        text-shadow: 60px 0 0 lime, -60px 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    92% {\n        text-shadow: 0 0 0 lime, 0 0 0 #0c33f5;\n        filter: blur(0);\n    }\n    92% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0);\n    }\n    93% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0);\n    }\n    94% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0);\n    }\n    95% {\n        text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;\n        filter: blur(0);\n    }\n    96% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    97% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    98% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    99% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0);\n    }\n    100% {\n        text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;\n        filter: blur(0);\n    }\n}";
      HTMLoutStr = "<p class='glitch'>This is some glitchy text!</p>";
      PreviewOutStr = "<style>" + CSSoutStr + "</style>" + "<p class='glitch' style='font-size:45px'>This is some glitchy text!</p>";
      break;
    case "varDyingSign":
      CSSoutStr = ":root {\n  --glowInner: transparent;\n  --glowColor: #fff;\n}\n.neon {\n  text-shadow: 0 0 15px var(--glowInner), 0 0 20px var(--glowInner),\n    0 0 30px var(--glowColor), 0 0 40px var(--glowColor),\n    0 0 50px var(--glowColor), 0 0 60px var(--glowColor),\n    0 0 70px var(--glowColor);\n}\n.flicker1 {\n  color: inherit;\n  display: inline;\n  animation: flicker1 5s infinite;\n}\n.flicker2 {\n  color: inherit;\n  display: inline;\n  animation: flicker2 3s infinite;\n}\n.flicker3 {\n  color: inherit;\n  display: inline;\n  animation: flicker1 2s infinite;\n}\n@keyframes flicker1 {\n  0% {\n    opacity: 1;\n  }\n  9% {\n    opacity: 1;\n  }\n  10% {\n    opacity: 0;\n  }\n  12% {\n    opacity: 0;\n  }\n  13% {\n    opacity: 1;\n  }\n  18% {\n    opacity: 1;\n  }\n  19% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  22% {\n    opacity: 1;\n  }\n  23% {\n    opacity: 1;\n  }\n  24% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 0;\n  }\n  26% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes flicker2 {\n  0% {\n    opacity: 1;\n  }\n  15% {\n    opacity: 1;\n  }\n  16% {\n    opacity: 0;\n  }\n  18% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  23% {\n    opacity: 1;\n  }\n  24% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  51% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  76% {\n    opacity: 0;\n  }\n  78% {\n    opacity: 0;\n  }\n  79% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n";
      HTMLoutStr = "<p class='neon'>T<span class='flicker2'>h</span>is <span class='flicker3'>Sign</span> Is <span class='flicker1 neon'>D</span>ying</p>";
      PreviewOutStr = "<style>" + CSSoutStr + "</style>" + "<p class='neon' style='font-size:45px'>T<span class='flicker2'>h</span>is <span class='flicker3'>Sign</span> Is <span class='flicker1 neon'>D</span>ying</p>";
      break;
    case "varTopEight":
      CSSoutStr = "";
      HTMLoutStr = "";
      PreviewOutStr = "";
      break;
    case "varCRT":
      CSSoutStr = "body::before {\n  content: ' ';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);\n  z-index: 100;\n  background-size: 100% 2px, 3px 100%;\n  pointer-events: none;\n}";
      HTMLoutStr = "";
      PreviewOutStr = "<p>Thank you <a href='https://spacehey.com/profile?id=72395'>p0libius</a> for the design.</p><div id='innerPreview'></div><br><style>#innerPreview{width: 100%; height: 100%;background: #FFF;  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);\n  z-index: 1;\n  background-size: 100% 2px, 3px 100%;\n  pointer-events: none;}</style>";
      break;
    case "varSnowflakes":
      CSSoutStr = ".snowflake {\n  position: fixed;\n  top: -10%;\n  z-index: 99;\n  user-select: none;\n  animation-name: snowflakes-fall, snowflakes-shake;\n  animation-duration: 10s, 3s;\n  animation-timing-function: linear, ease-in-out;\n  animation-iteration-count: infinite, infinite;\n  animation-play-state: running, running;\n  width: 25px;\n  height: 25px;\n}\n\n.snowflake.type1{\n  content: url(https://cinni.net/images/favi/p/poke_61.gif);\n}\n\n.snowflake:nth-of-type(0) {\n  left: 1%;\n  animation-delay: 0s, 0s\n}\n\n.snowflake:nth-of-type(1) {\n  left: 10%;\n  animation-delay: 1s, 1s\n}\n\n.snowflake:nth-of-type(2) {\n  left: 20%;\n  animation-delay: 6s, .5s\n}\n\n.snowflake:nth-of-type(3) {\n  left: 30%;\n  animation-delay: 4s, 2s\n}\n\n.snowflake:nth-of-type(4) {\n  left: 40%;\n  animation-delay: 2s, 2s\n}\n\n.snowflake:nth-of-type(5) {\n  left: 50%;\n  animation-delay: 8s, 3s\n}\n\n.snowflake:nth-of-type(6) {\n  left: 60%;\n  animation-delay: 6s, 2s\n}\n\n.snowflake:nth-of-type(7) {\n  left: 70%;\n  animation-delay: 2.5s, 1s\n}\n\n.snowflake:nth-of-type(8) {\n  left: 80%;\n  animation-delay: 1s, 0s\n}\n\n.snowflake:nth-of-type(9) {\n  left: 90%;\n  animation-delay: 3s, 1.5s\n}\n\n.snowflake:nth-of-type(10) {\n  left: 25%;\n  animation-delay: 2s, 0s\n}\n\n.snowflake:nth-of-type(11) {\n  left: 65%;\n  animation-delay: 4s, 2.5s\n}\n\n@keyframes snowflakes-fall {\n  0% { top: -10% }\n  100% { top: 100% }\n}\n\n@keyframes snowflakes-shake {\n  0%, 100% { transform: translateX(0) }\n  50% { transform: translateX(80px) }\n}";
      HTMLoutStr = "<img class='snowflake type1'/>\n<img class='snowflake type2' src='https://i.ibb.co/vBzPhbB/d69nlwl-d0598ebc-c85d-4eda-bfff-e40c17e684a0.gif' />\n<img class='snowflake type1'/>\n<img class='snowflake type1'/>\n<img class='snowflake type1'/>\n<img class='snowflake type2' src='https://i.ibb.co/vBzPhbB/d69nlwl-d0598ebc-c85d-4eda-bfff-e40c17e684a0.gif'/>\n<img class='snowflake type1'/>\n<img class='snowflake type1'/>\n<img class='snowflake type2' src='https://i.ibb.co/vBzPhbB/d69nlwl-d0598ebc-c85d-4eda-bfff-e40c17e684a0.gif'/>\n<img class='snowflake type1'/>\n<img class='snowflake type1'/>\n<img class='snowflake type1'/>";
      PreviewOutStr = "<style>" + CSSoutStr + "</style>" + HTMLoutStr;
      break;
    case "varAnimatedCRT":
      CSSoutStr = "html:before {\n  animation: grain 8s steps(10) infinite;\n  background-image: url(https://i.ibb.co/d2Np1d2/static.gif);\n  background-size: 200px !important;\n  content: '';\n  height: 300%;\n  left: -50%;\n  opacity: .3; /*Change this value (0 - 1) to change the intensity of the effect)*/\n  position: fixed;\n  top: -110%;\n  width: 300%;\n  pointer-events:none;\n}\n@keyframes grain {\n  0%, 100% { transform:translate(0, 0) }\n  10% { transform:translate(-5%, -10%) }\n  20% { transform:translate(-15%, 5%) }\n  30% { transform:translate(7%, -25%) }\n  40% { transform:translate(-5%, 25%) }\n  50% { transform:translate(-15%, 10%) }\n  60% { transform:translate(15%, 0%) }\n  70% { transform:translate(0%, 15%) }\n  80% { transform:translate(3%, 35%) }\n  90% { transform:translate(-10%, 10%) }\n}";
      HTMLoutStr = "";
      PreviewOutStr = "<style>  #snippetPreview {\n  \n  background-image: url(https://i.ibb.co/d2Np1d2/static.gif);\n  \n  content: '';\n  height: 100%;\n  width: 100%;\n  opacity: .3;\n  position: relative;\n pointer-events:none;\n}\n@keyframes grain {\n  0%, 100% { transform:translate(0, 0) }\n  10% { transform:translate(-5%, -10%) }\n  20% { transform:translate(-15%, 5%) }\n  30% { transform:translate(7%, -25%) }\n  40% { transform:translate(-5%, 25%) }\n  50% { transform:translate(-15%, 10%) }\n  60% { transform:translate(15%, 0%) }\n  70% { transform:translate(0%, 15%) }\n  80% { transform:translate(3%, 35%) }\n  90% { transform:translate(-10%, 10%) }\n}  </style>";
      break;
    case "varLoadingAnimation":
      CSSoutStr = "body:before {\ncontent: ' ';\nheight: 100vh;\nwidth: 100vw;\ndisplay: block;\nposition: fixed; \ntop: 0; \nleft: 0; \nz-index: 100;\nbackground-image: url('https://i.ibb.co/5MB69XF/7e2aeb1567e91bfc2404cecca6aceecd.gif');\nbackground-size: cover;\nbackground-repeat: no-repeat;\nbackground-position:center;\nanimation: yourAnimation 6s ease 0s 1 normal forwards;\npointer-events: none;\n}\n@keyframes yourAnimation { 0.0%{ opacity: 1;} 75%{ opacity: 1; } 100%{ opacity: 0;} } ";
      HTMLoutStr = "";
      PreviewOutStr = "<style>#snippetPreview {\ncontent: ' ';\nheight: 100%;\nwidth: 100%;\ndisplay: block;\nposition: relative; \ntop: 0; \nleft: 0; \nz-index: 100;\nbackground-image: url('https://i.ibb.co/5MB69XF/7e2aeb1567e91bfc2404cecca6aceecd.gif');\nbackground-size: cover;\nbackground-repeat: no-repeat;\nbackground-position:center;\nanimation: yourAnimation 6s ease 0s 1 normal forwards;\npointer-events: none;\n}\n@keyframes yourAnimation { 0.0%{ opacity: 1;} 75%{ opacity: 1; } 100%{ opacity: 0;} } </style";
      break;
    case "varBanner":
      CSSoutStr = "main:before {\n	width: 100%;\n	height: 300px;\n	display: block;\n	content: '';\n	background-image: url(https://i.ibb.co/M6Qwf44/8653-smile.gif);\n	background-position: center center;\n	background-size: cover;\n}\n@media only screen and (max-width: 600px) {\n	main:before{\n		height: 200px;\n	}\n}\n";
      HTMLoutStr = "";
      PreviewOutStr = "<style>#snippetPreview {\n	width: 100%;\n	height: 300px;\n	display: block;\n	content: '';\n	background-image: url(https://i.ibb.co/M6Qwf44/8653-smile.gif);\n	background-position: center center;\n	background-size: cover;\n}\n@media only screen and (max-width: 600px) {\n	main:before{\n		height: 200px;\n	}\n}\n</style>";
      break;
    case "varComicBoox":
      CSSoutStr = "@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');\n:root{\n    --comicOutline:#333333\n}\n.comicBoox{\n  	color: #FFFFFF;\n  	font-family: 'Luckiest Guy',cursive;\n    text-shadow:0 0.1em 20px var(--comicOutline), 0.05em -0.03em 0 var(--comicOutline), 0.05em 0.005em 0 var(--comicOutline), 0 0.08em 0 var(--comicOutline), 0.05em 0.08em 0 var(--comicOutline), 0 -0.03em 0 var(--comicOutline), -0.03em -0.03em 0 var(--comicOutline), -0.03em 0.08em 0 var(--comicOutline), -0.03em 0 0 var(--comicOutline)\n}";
      HTMLoutStr = "<h1 class='comicBoox'>Comic Boox</h1>";
      PreviewOutStr = "<style>" + CSSoutStr + "</style>" + "<h1 class='comicBoox' style='font-size: 45px;'>Comic Boox</h1>";
      break;
    case "varAnaglyph":
      CSSoutStr = "@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');\n\n.anaglyph{\n  	font-family: 'Major Mono Display', monospace;\n  	color: #000000;\n    animation: anaglyphMove linear 3S infinite;\n}\n\n:root{\n    --glyphColor1:#ff0000;\n    --glyphColor2:#00ffff\n}\n\n@keyframes anaglyphMove{\n    0%{\n        text-shadow:0.03em -.03em 0 var(--glyphColor1), 0.02em -.02em 0 var(--glyphColor1), 0.01em -.01em 0 var(--glyphColor1), 0.005em -.005em 0 var(--glyphColor1), -.03em 0.03em 0 var(--glyphColor2), -.02em 0.02em 0 var(--glyphColor2), -.01em 0.01em 0 var(--glyphColor2), -.005em 0.005em 0 var(--glyphColor2)\n    }\n    25%{\n        text-shadow:-.03em -.03em 0 var(--glyphColor1), -.02em -.02em 0 var(--glyphColor1), -.01em -.01em 0 var(--glyphColor1), -.005em -.005em 0 var(--glyphColor1), 0.03em 0.03em 0 var(--glyphColor2), 0.02em 0.02em 0 var(--glyphColor2), 0.01em 0.01em 0 var(--glyphColor2), 0.005em 0.005em 0 var(--glyphColor2)\n    }\n    50%{\n        text-shadow:-.03em 0.03em 0 var(--glyphColor1), -.02em 0.02em 0 var(--glyphColor1), -.01em 0.01em 0 var(--glyphColor1), -.005em 0.005em 0 var(--glyphColor1), 0.03em -.03em 0 var(--glyphColor2), 0.02em -.02em 0 var(--glyphColor2), 0.01em -.01em 0 var(--glyphColor2), 0.005em -.005em 0 var(--glyphColor2)\n    }\n    75%{\n        text-shadow:0.03em 0.03em 0 var(--glyphColor1), 0.02em 0.02em 0 var(--glyphColor1), 0.01em 0.01em 0 var(--glyphColor1), 0.005em 0.005em 0 var(--glyphColor1), -.03em -.03em 0 var(--glyphColor2), -.02em -.02em 0 var(--glyphColor2), -.01em -.01em 0 var(--glyphColor2), -.005em -.00em 0 var(--glyphColor2)\n    }\n    100%{\n        text-shadow:0.03em -.03em 0 var(--glyphColor1), 0.02em -.02em 0 var(--glyphColor1), 0.01em -.01em 0 var(--glyphColor1), 0.005em -.005em 0 var(--glyphColor1), -.03em 0.03em 0 var(--glyphColor2), -.02em 0.02em 0 var(--glyphColor2), -.01em 0.01em 0 var(--glyphColor2), -.005em 0.005em 0 var(--glyphColor2)\n    }\n}";
      HTMLoutStr = "<h1 class='anaglyph'>The Anaglyph</h1>";
      PreviewOutStr = "<style>" + CSSoutStr + '#snippetPreview{background: #000000 !important;}' + "</style>" + "<h1 class='anaglyph' style='font-size: 45px;'>The Anaglyph</h1>";
      break;
    case "varAgoraphobia":
      CSSoutStr = "@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');\n\n.agoraphobia{\n    color:transparent !important;\n    text-shadow:0 0 5px rgba(0, 0, 0, 0.5);\n    animation:horror 5s infinite;\n   	font-family: 'Special Elite',cursive;\n}\n:root{\n    --agoraphobiaColor1:255,255,255\n}\n@keyframes horror{\n    0%{\n        text-shadow:0 0 0.1em rgba(var(--agoraphobiaColor1),0.1)\n    }\n    5%{\n        text-shadow:-.05em 0.05em 0.1em rgba(var(--agoraphobiaColor1),0.2)\n    }\n    10%{\n        text-shadow:0 0 0.1em rgba(var(--agoraphobiaColor1),0.3)\n    }\n    15%{\n        text-shadow:-0.05em 0 0.1em rgba(var(--agoraphobiaColor1),0.4)\n    }\n    16%{\n        text-shadow:0 0 0.005em rgba(var(--agoraphobiaColor1),1)\n    }\n    17%{\n        text-shadow:0 0 0.1em rgba(var(--agoraphobiaColor1),0.4)\n    }\n    20%{\n        text-shadow:0.05em 0.005em 0.1em rgba(var(--agoraphobiaColor1),0.5)\n    }\n    25%{\n        text-shadow:0 0 0.1em rgba(var(--agoraphobiaColor1),0.6)\n    }\n    30%{\n        text-shadow:0 0 0.1em rgba(var(--agoraphobiaColor1),0.7)\n    }\n    35%{\n        text-shadow:0 0 0.005em rgba(var(--agoraphobiaColor1),0.8)\n    }\n    36%{\n        text-shadow:0 0 0.005em rgba(var(--agoraphobiaColor1),1)\n    }\n    37%{\n        text-shadow:0 0 0.005em rgba(var(--agoraphobiaColor1),0.8)\n    }\n    40%{\n        text-shadow:0 0 0.005em rgba(var(--agoraphobiaColor1),0.9)\n    }\n    45%{\n        text-shadow:0 -.05em 0.005em rgba(var(--agoraphobiaColor1),0.3)\n    }\n    50%{\n        text-shadow:0.01em 0.01em 0.005em rgba(var(--agoraphobiaColor1),0.7)\n    }\n    55%{\n        text-shadow:-.01em -.01em 0.1em rgba(var(--agoraphobiaColor1),0.6)\n    }\n    56%{\n        text-shadow:0.01em -.01em 0.005em rgba(var(--agoraphobiaColor1),1)\n    }\n    57%{\n        text-shadow:-.01em 0.01em 0.1em rgba(var(--agoraphobiaColor1),0.6)\n    }\n    60%{\n        text-shadow:0.01em 0.01em 0.1em rgba(var(--agoraphobiaColor1),0.5)\n    }\n    65%{\n        text-shadow:0 0 0.1em rgba(var(--agoraphobiaColor1),0.4)\n    }\n    70%{\n        text-shadow:0 0 0.1em rgba(var(--agoraphobiaColor1),0.3)\n    }\n    75%{\n        text-shadow:0.01em -.01em 0.1em rgba(var(--agoraphobiaColor1),0.2)\n    }\n    76%{\n        text-shadow:-.01em 0.01em 0.005em rgba(var(--agoraphobiaColor1),1)\n    }\n    77%{\n        text-shadow:0.01em 0.01em 0.1em rgba(var(--agoraphobiaColor1),0.2)\n    }\n    80%{\n        text-shadow:0 0.01em 0.005em rgba(var(--agoraphobiaColor1),0.1)\n    }\n    85%{\n        text-shadow:0 0 0.005em rgba(var(--agoraphobiaColor1),0.2)\n    }\n    86%{\n        text-shadow:0 0 0.005em rgba(var(--agoraphobiaColor1),1)\n    }\n    87%{\n        text-shadow:0 0 0.005em rgba(var(--agoraphobiaColor1),0.2)\n    }\n    90%{\n        text-shadow:0 0 0.005em rgba(var(--agoraphobiaColor1),0.3)\n    }\n    95%{\n        text-shadow:0 0 0.1em rgba(var(--agoraphobiaColor1),0.4)\n    }\n    100%{\n        text-shadow:0 0 0.1em rgba(var(--agoraphobiaColor1),0.5)\n    }\n}";
      HTMLoutStr = "<h1 class='agoraphobia'>Agoraphobia</h1>";
      PreviewOutStr = "<style>" + CSSoutStr + '#snippetPreview{background: #000000 !important;}' + "</style>" + "<h1 class='agoraphobia' style='font-size: 45px;'>Agoraphobia</h1>";
      break;
    case "varDisplayNameImage":
      CSSoutStr = ".profile h1{\n  font-size: 0px;\n}\n\n.profile h1:before{\n  content:url('url') !important;\n}";
      HTMLoutStr = "";
      PreviewOutStr = "<p>Thank you <a href='https://spacehey.com/xqj'>Anti</a> for the design.</p><br><p style='font-size:20px;'>Enter the link to the image you would like to replace your display name with:</p><input type='text' id='profileNameImage' style='width: 200px;'>\n<button id='youtubeGenButton' onclick='genProfileNameImage()' style='width: 100px;'>Generate</button>";
      break;
    case "varInterestsCustomize":
      CSSoutStr = "";
      HTMLoutStr = "";
      PreviewOutStr = "<p>Check off the boxes you would like to show. Unchecked boxes will hide the element.</p>\n<ul style='list-style: none; padding: 0; margin: 0; text-align: left;'>\n  <li><input type='checkbox' id='interests' checked=true><label for='interests'> Interests</label><br></li>\n  <li><input type='checkbox' id='general'><label for='general'> General</label></li>\n  <li><input type='checkbox' id='music'><label for='music'> Music</label></li>\n  <li><input type='checkbox' id='movies'><label for='movies'> Movies</label></li>\n  <li><input type='checkbox' id='television'><label for='television'> Television</label></li>\n  <li><input type='checkbox' id='books'><label for='books'> Books</label></li>\n  <li><input type='checkbox' id='heroes'><label for='heroes'> Heroes</label></li>\n</ul>\n<button onclick='genInterests()'>Generate</button>\n<div id='thing'></div>";
      break;
    case "template":
      CSSoutStr = "";
      HTMLoutStr = "";
      PreviewOutStr = "";
      break;
  }
  var returnVals = [CSSoutStr, HTMLoutStr, PreviewOutStr];
  return returnVals;
  /*
  document.getElementById("CSSOutputText").value = CSSoutStr;
  document.getElementById("HTMLOutputText").value = HTMLoutStr;
  document.getElementById("snippetPreview").innerHTML = PreviewOutStr;
  */
}

function genEmbed() {
  var youtubeURL = document.getElementById('youtubeURL').value;
  var videoID = "";
  if (youtubeURL.includes(".be")) {
    videoID = youtubeURL.split(".be/");    /*https://youtu.be/QbRkKO3xzQ8*/
  } else {
    videoID = youtubeURL.split('=');
  }

  var embedStr = "<iframe width='0' height='0' src='https://www.youtube.com/embed/" + videoID[1] + "?si=V5PKq-TPG1c-kxHI//?&;amp;;autoplay=1&;loop=1&;controls=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen='' loading='lazy'></iframe>";
  document.getElementById('HTMLOutputText').value = embedStr;
}

function genProfileNameImage() {
  var nameImage = document.getElementById("profileNameImage").value;
  var embedStr = ".profile h1{\n  font-size: 0px;\n}\n\n.profile h1:before{\n  content:url('" + nameImage + "') !important;\n}";
  document.getElementById('CSSOutputText').value = embedStr;
}

function genInterests() {
  var d = document;
  var interests = d.getElementById("interests").checked;
  var general = d.getElementById("general").checked;
  var music = d.getElementById("music").checked;
  var movies = d.getElementById("movies").checked;
  var television = d.getElementById("television").checked;
  var books = d.getElementById("books").checked;
  var heroes = d.getElementById("heroes").checked;
  var outStr = "";
  if (interests === false) { outStr = outStr + ".col.w-40.left .table-section{display: none;}\n"; }
  else { outStr = outStr + ".col.w-40.left .table-section{display: block;}\n"; }
  if (general === false) { outStr = outStr + ".details-table tr:nth-child(1){display: none;}\n"; }
  else { outStr = outStr + ".details-table tr:nth-child(1){display: table-row;}\n"; }
  if (music === false) { outStr = outStr + ".details-table tr:nth-child(2){display: none;}\n"; }
  else { outStr = outStr + ".details-table tr:nth-child(2){display: table-row;}\n"; }
  if (movies === false) { outStr = outStr + ".details-table tr:nth-child(3){display: none;}\n"; }
  else { outStr = outStr + ".details-table tr:nth-child(3){display: table-row;}\n"; }
  if (television === false) { outStr = outStr + ".details-table tr:nth-child(4){display: none;}\n"; }
  else { outStr = outStr + ".details-table tr:nth-child(4){display: table-row;}\n"; }
  if (books === false) { outStr = outStr + ".details-table tr:nth-child(5){display: none;}\n"; }
  else { outStr = outStr + ".details-table tr:nth-child(5){display: table-row;}\n"; }
  if (heroes === false) { outStr = outStr + ".details-table tr:nth-child(6){display: none;}\n"; }
  else { outStr = outStr + ".details-table tr:nth-child(6){display: table-row;}\n"; }

  document.getElementById('CSSOutputText').value = outStr;
}


function showWindow(popup, ieURL = "", ieTitle = "") {
  switch (popup) {
    case "codeSnippets":
      document.getElementById("codeSnippets").style.display = "flex";
      break;
    case "textEffects":
      document.getElementById("textEffects").style.display = "flex";
      break;
    case "blinkies":
      document.getElementById("blinkies").style.display = "flex";
      break;
    case "ieContainer":
      document.getElementById("ieContainer").style.display = "flex";
      showIEPage(ieURL,ieTitle);
      break;
    case "otherResources":
      document.getElementById("otherResources").style.display = "flex";
      break;
  }
}

function closeWindow(popup) {
  switch (popup) {
    case "codeSnippets":
      document.getElementById("codeSnippets").style.display = "none";
      break;
    case "textEffects":
      document.getElementById("textEffects").style.display = "none";
      break;
    case "blinkies":
      document.getElementById("blinkies").style.display = "none";
      break;
    case "ieContainer":
      document.getElementById("ieContainer").innerHTML = "";
      document.getElementById("ieContainer").style.display = "none";
      break;
    case "wordContainer":
      document.getElementById("wordContainer").innerHTML = "";
      document.getElementById("wordContainer").style.display = "none";
      break;
    case "otherResources":
      document.getElementById("otherResources").style.display = "none";
      break;
  }
}


function showIEPage(pageURL, pageTitle){
  var outStr = "";
  outStr = `<div class='window ie'><div class='title-bar'><div class='title-bar-text'><img src='../images/other/IE5-Page-16x16.png' />` + pageTitle + 
            ` - Microsoft Internet Explorer</div><div class='title-bar-controls'><button aria-label='Minimize'></button><button aria-label='Maximize'></button>
              <button aria-label='Close' onclick='closeWindow("ieContainer")'></button></div></div><div class='ieTopBar'><div class='menuBar' style='width: 100% !important;'>
              <li class='toolSizer' style='height: 25px !important;'></li><li><span class='underline'>F</span>ile</li><li><span class='underline'>E</span>dit</li>
              <li><span class='underline'>V</span>iew</li><li><span class='underline'>H</span>elp</li><img src='../images/other/it5_loading_globe.gif' style='width: 50px; margin-right: 0; margin-left: auto;'>
              </div><div class='menuBar ieNav'><li class='toolSizer' style='height: 60px !important;'></li><li><img src='../images/other/Back.png'>Back</li><li><img src='../images/other/Forward.png'>Forward</li>
              <li><img src='../images/other/Stop.png'>Stop</li><li><img src='../images/other/Refresh.png'>Refresh</li><li><img src='../images/other/Home.png'>Home</li>
              <li class='toolSizer' style='height: 60px !important;'></li><li><img src='../images/other/Search.png'>Search</li><li><img src='../images/other/Favorites.png'>Favorites</li>
              <li><img src='../images/other/History.png'>History</li><li class='toolSizer' style='height: 60px !important;'></li><li><img src='../images/other/Mail.png'>Mail</li>
              <li><img src='../images/other/Print.png'>Print</li></div><div class='menuBar ieAddress'><li class='toolSizer' style='height: 20px !important;'></li><li class='noButton'>A<span class='underline'>d</span>dress:</li>
              <li class='noButton'><input type='text' value='` + pageURL + `' readonly></li><li onclick="openInNewTab('` + pageURL + `')"><img src='../images/other/Go-Navigation.png'>Go</li></div>
              </div><div class='window-body'><div class='fileExplorer'><iframe src='` + pageURL +`'frameborder='0'></iframe></div></div><div class='status-bar' style='display: flex; flex-direction: row;'>
              <p class='status-bar-field'> <img src='../images/other/Page-Alert-16x16.png'style='padding: 0 5px 0 0'>Done!</p><p class='status-bar-field'></p>
              <p class='status-bar-field'></p><p class='status-bar-field'> <img src='../images/other/World.png' alt='' />Internet</p></div></div>
        `;
  document.getElementById("ieContainer").innerHTML = outStr;
}

function showWord(pageTitle, elem){
  document.getElementById("wordContainer").style.display = "block";
  var outStr = "";
  var pageArr = CSSReference(elem);

  outStr = `<div class="window"><div class="title-bar"><div class="title-bar-text">` + pageTitle + ` - WordPad</div><div class="title-bar-controls"><button aria-label="Minimize"></button>
	<button aria-label="Maximize"></button><button aria-label="Close" onclick="closeWindow('wordContainer')"></button></div></div><div class="menuBar"><li><span class="underline">F</span>ile</li>
	<li><span class="underline">E</span>dit</li><li><span class="underline">V</span>iew</li><li><span class="underline">I</span>nsert</li><li>F<span class="underline">o</span>rmat</li>
	<li><span class="underline">H</span>elp</li></div><div class="menuBar fileBar"><li style="margin: 0 0 0 10px;"><img src="../images/other/Wordpad Icons/new_file.png"></li><li><img src="../images/other/Wordpad Icons/open_file.png"></li>
	<li><img src="../images/other/Wordpad Icons/save_file.png"></li><li style="margin: 0 0 0 10px;"><img src="../images/other/Wordpad Icons/print_file.png"></li><li><img src="../images/other/Wordpad Icons/search_file.png"></li>
	<li style="margin: 0 0 0 10px;"><img src="../images/other/Wordpad Icons/binoculars.png"></li><li style="margin: 0 0 0 10px;"><img src="../images/other/Wordpad Icons/scissors.png"></li><li><img src="../images/other/Wordpad Icons/copy.png"></li>
	<li><img src="../images/other/Wordpad Icons/clipboard.png"></li><li><img src="../images/other/Wordpad Icons/undo.png"></li><li style="margin: 0 0 0 10px;"><img src="../images/other/Wordpad Icons/calendar.png"></li>
	</div><div class="menuBar formatBar"><li class="noButton"><select style="width: 250px;"><option>Times New Roman (Western)</option></select></li><li class="noButton"><select><option>10</option></select></li>
	<li><img src="../images/other/Wordpad Icons/format_B.png"></li><li><img src="../images/other/Wordpad Icons/format_I.png"></li><li><img src="../images/other/Wordpad Icons/format_U.png"></li>
	<li><img src="../images/other/Wordpad Icons/format_color.png"></li><li style="margin: 0 0 0 8px;"><img src="../images/other/Wordpad Icons/position_left.png"></li><li><img src="../images/other/Wordpad Icons/position_center.png"></li>
	<li><img src="../images/other/Wordpad Icons/position_right.png"></li><li style="margin: 0 0 0 8px;"><img src="../images/other/Wordpad Icons/bullets.png"></li></div><div class="menuBar marginBar">
	<li class="noButton"><img src="../images/other/Wordpad Icons/margins.png" alt=""></li></div><div class="window-body"><div class="fileExplorer"><div id="CSSOutput"><h3>Interactive Preview:</h3>
	<div id="snippetPreview">` + pageArr[2] + `</div></div><div class="outputCol"><div class="topBar"><h3>Element CSS: <button onclick="copyText('quickCSS')">Copy</button></h3></div><textarea id="CSSOutputText">` + pageArr[0] + `</textarea>
	<div class="topBar"><h3>Element HTML: <button onclick="copyText('quickHTML')">Copy</button></h3></div><textarea id="HTMLOutputText">` + pageArr[1] + `</textarea></div></div></div>
	<div class="status-bar"><p class="status-bar-field">Press F1 for help</p><p class="status-bar-field"></p><p class="status-bar-field">NUM</p></div></div>`;
  
  document.getElementById("wordContainer").innerHTML = outStr;
  
}


function openInNewTab(url) {
  window.open(url, '_blank').focus();
}