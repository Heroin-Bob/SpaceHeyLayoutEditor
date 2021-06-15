function CSSReference(elem){
  var outStr = "";
  var outImg = "";
  var folder = "CSSElements/"
  switch (elem){
    case "simpleLayout":
      outStr = "";
      break;
    case "varTemplate":
      outStr = ":root {\n  --blue: #1e90ff;\n  --white: #ffffff;\n}";
      break;
    case "body":
      outStr = "body {\n\n}";
      break;
    case "main":
      outStr = "main {\n\n}";
      break;
    case "blurbs":
      outStr = ".blurbs{\n\n}";
      break;
    case "header":
      outImg = 'Header.png';
      outStr = "nav {\n\n}";
      break;
    case "headerTop":
      outImg = "Header_Top.png";
      outStr = "nav .top {\n\n}";
      break;
    case "navLinks":
      outImg = "Header_Links.png";
      outStr = "nav .links{\n\n}";
      break;
    case "aboutme":
      outStr = ".blurbs.inner.section:nth-child(1){\n\n}";
      break;
    case "meet":
      outStr = ".blurbs.inner.section:nth-child(2){\n\n}";
      break;
    case "general":
      outStr = "";
      break;
    case "leftColumn":
      outImg = "LeftColumn.png";
      outStr = ".col.w-40.left{\n\n}";
      break;
  }
  document.getElementById("CSSOutputText").value = outStr;
  if (outImg != ""){
    document.getElementById("elementImg").style.backgroundImage = "url('" + folder + outImg + "')";
  } else {
    document.getElementById("elementImg").style.backgroundImage = "";
  }
}
