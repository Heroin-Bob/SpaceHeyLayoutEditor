function CSSReference(elem){
  var outStr = "";
  var outImg = "";
  var folder = "CSSElements/";
  switch (elem){
    case "simpleLayout":
      outStr = "";
      break;
    case "varTemplate":
      outStr = ":root {\n  --blue: #1e90ff;\n  --white: #ffffff;\n}";
      break;
    case "varTemplateDarkNight":
      outStr = ":root {\n  --themecolor1: #161722;\n  --themecolor2: #25273c;\n  --themecolor3: #777a92;\n  --themecolor4: #cacde8;\n  --themecolor5: #e4e5f1;\n}\n\nbody{\n  background: var(--themecolor1);\n}\n\nmain{\n  background: var(--themecolor2);\n}\n\np{\n  color: var(--themecolor5);\n}\n\nh1{\n  color: var(--themecolor5);\n}\n\nh4{\n  color: var(--themecolor4) !important;\n}\n\na{\n  color: var(--themecolor4) !important;\n}\n\n.heading{\n  background: var(--themecolor3) !important;\n}\n\n.contact, .url-info, .table-section{\n  border: 2px solid var(--themecolor3) !important;\n}\n\n.comments-table{\n  border: var(--themecolor3);\n}\n\n.comments-table tr td{\n  background: var(--themecolor4) !important;\n}\n.comments-table p {\n  color: var(--themecolor1);\n}\n\n.profile-info .inner{\n  color: var(--themecolor5);\n}\n\n.profile-info{\n  border: 2px solid var(--themecolor4);\n}\n\n.details-table tr td{\n  background: var(--themecolor3) !important;\n  color: var(--themecolor5) !important;\n}\n\n.count {\n  color: var(--themecolor4);\n}\n\nfooter, nav .top{\n  background: var(--themecolor2) !important;\n}\n\nnav .links{\n  background: var(--themecolor3);\n}\n\n.comment-replies{\n  border: 4px solid var(--themecolor5);\n}\n";
      outImg = "Template_DarkMode_Night.png";
      break;
    case "varTemplateDarkGray":
      outStr = ":root {\n--themecolor5: #999999;\n--themecolor4: #777777;\n--themecolor3: #555555;\n--themecolor2: #333333;\n--themecolor1: #111111;\n}\n\n  body{\n    background: var(--themecolor1);\n  }\n\n  main{\n    background: var(--themecolor2);\n  }\n\n  p{\n    color: var(--themecolor5);\n  }\n\n  h1{\n    color: var(--themecolor5);\n  }\n\n  h4{\n    color: var(--themecolor4) !important;\n  }\n\n  a{\n    color: var(--themecolor4) !important;\n  }\n\n  .heading{\n    background: var(--themecolor3) !important;\n  }\n\n  .contact, .url-info, .table-section{\n    border: 2px solid var(--themecolor3) !important;\n  }\n\n  .comments-table{\n    border: var(--themecolor3);\n  }\n\n  .comments-table tr td{\n    background: var(--themecolor4) !important;\n  }\n  .comments-table p {\n    color: var(--themecolor1);\n  }\n\n  .profile-info .inner{\n    color: var(--themecolor5);\n  }\n\n  .profile-info{\n    border: 2px solid var(--themecolor4);\n  }\n\n  .details-table tr td{\n    background: var(--themecolor3) !important;\n    color: var(--themecolor5) !important;\n  }\n\n  .count {\n    color: var(--themecolor4);\n  }\n\n  footer, nav .top{\n    background: var(--themecolor2) !important;\n  }\n\n  nav .links{\n    background: var(--themecolor3);\n  }\n\n  .comment-replies{\n    border: 4px solid var(--themecolor5);\n  }\n  ";
      outImg = "Template_DarkMode_Gray.png";
      break;
    case "varTemplateFeelTheTeal":
      outStr = ":root {\n--themecolor4: #b2d8d8;\n--themecolor5: #66b2b2;\n--themecolor1: #008080;\n--themecolor3: #006666;\n--themecolor2: #004c4c;\n}\n\n  body{\n    background: var(--themecolor1);\n  }\n\n  main{\n    background: var(--themecolor2);\n  }\n\n  p{\n    color: var(--themecolor5);\n  }\n\n  h1{\n    color: var(--themecolor5);\n  }\n\n  h4{\n    color: var(--themecolor4) !important;\n  }\n\n  a{\n    color: var(--themecolor4) !important;\n  }\n\n  .heading{\n    background: var(--themecolor3) !important;\n  }\n\n  .contact, .url-info, .table-section{\n    border: 2px solid var(--themecolor3) !important;\n  }\n\n  .comments-table{\n    border: var(--themecolor3);\n  }\n\n  .comments-table tr td{\n    background: var(--themecolor4) !important;\n  }\n  .comments-table p {\n    color: var(--themecolor1);\n  }\n\n  .profile-info .inner{\n    color: var(--themecolor5);\n  }\n\n  .profile-info{\n    border: 2px solid var(--themecolor4);\n  }\n\n  .details-table tr td{\n    background: var(--themecolor3) !important;\n    color: var(--themecolor5) !important;\n  }\n\n  .count {\n    color: var(--themecolor4);\n  }\n\n  footer, nav .top{\n    background: var(--themecolor2) !important;\n  }\n\n  nav .links{\n    background: var(--themecolor3);\n  }\n\n  .comment-replies{\n    border: 4px solid var(--themecolor5);\n  }\n  ";
      outImg = "Template_FeelTheTeal.png";
      break;
    case "varTemplateIceCream":
      outStr = ":root {\n--themecolor4: #5c3d28;\n--themecolor2: #a5e5c3;\n--themecolor5: #f09ce0;\n--themecolor1: #f6ccea;\n--themecolor3: #f6eed6;\n}\n\n  body{\n    background: var(--themecolor1);\n  }\n\n  main{\n    background: var(--themecolor2);\n  }\n\n  p{\n    color: var(--themecolor5);\n  }\n\n  h1{\n    color: var(--themecolor5);\n  }\n\n  h4{\n    color: var(--themecolor4) !important;\n  }\n\n  a{\n    color: var(--themecolor4) !important;\n  }\n\n  .heading{\n    background: var(--themecolor3) !important;\n  }\n\n  .contact, .url-info, .table-section{\n    border: 2px solid var(--themecolor3) !important;\n  }\n\n  .comments-table{\n    border: var(--themecolor3);\n  }\n\n  .comments-table tr td{\n    background: var(--themecolor4) !important;\n  }\n  .comments-table p {\n    color: var(--themecolor1);\n  }\n\n  .profile-info .inner{\n    color: var(--themecolor5);\n  }\n\n  .profile-info{\n    border: 2px solid var(--themecolor4);\n  }\n\n  .details-table tr td{\n    background: var(--themecolor3) !important;\n    color: var(--themecolor5) !important;\n  }\n\n  .count {\n    color: var(--themecolor4);\n  }\n\n  footer, nav .top{\n    background: var(--themecolor2) !important;\n  }\n\n  nav .links{\n    background: var(--themecolor3);\n  }\n\n  .comment-replies{\n    border: 4px solid var(--themecolor5);\n  }\n  ";
      outImg = "Template_IceCream.png";
      break;
    case "varTemplateReptile":
      outStr = ":root {\n--themecolor5: #61892f;\n--themecolor2: #86c232;\n--themecolor3: #222629;\n--themecolor4: #474b4f;\n--themecolor1: #6b6e72;\n}\n\n  body{\n    background: var(--themecolor1);\n  }\n\n  main{\n    background: var(--themecolor2);\n  }\n\n  p{\n    color: var(--themecolor5);\n  }\n\n  h1{\n    color: var(--themecolor5);\n  }\n\n  h4{\n    color: var(--themecolor4) !important;\n  }\n\n  a{\n    color: var(--themecolor4) !important;\n  }\n\n  .heading{\n    background: var(--themecolor3) !important;\n  }\n\n  .contact, .url-info, .table-section{\n    border: 2px solid var(--themecolor3) !important;\n  }\n\n  .comments-table{\n    border: var(--themecolor3);\n  }\n\n  .comments-table tr td{\n    background: var(--themecolor4) !important;\n  }\n  .comments-table p {\n    color: var(--themecolor1);\n  }\n\n  .profile-info .inner{\n    color: var(--themecolor5);\n  }\n\n  .profile-info{\n    border: 2px solid var(--themecolor4);\n  }\n\n  .details-table tr td{\n    background: var(--themecolor3) !important;\n    color: var(--themecolor5) !important;\n  }\n\n  .count {\n    color: var(--themecolor4);\n  }\n\n  footer, nav .top{\n    background: var(--themecolor2) !important;\n  }\n\n  nav .links{\n    background: var(--themecolor3);\n  }\n\n  .comment-replies{\n    border: 4px solid var(--themecolor5);\n  }\n  ";
      outImg = "Template_Reptile.png";
      break;
    case "varTemplateVampyr":
      outStr= ":root {\n--themecolor5: #ff0000;\n--themecolor4: #bf0000;\n--themecolor1: #800000;\n--themecolor3: #400000;\n--themecolor2: #000000;\n}\n\n  body{\n    background: var(--themecolor1);\n  }\n\n  main{\n    background: var(--themecolor2);\n  }\n\n  p{\n    color: var(--themecolor5);\n  }\n\n  h1{\n    color: var(--themecolor5);\n  }\n\n  h4{\n    color: var(--themecolor4) !important;\n  }\n\n  a{\n    color: var(--themecolor4) !important;\n  }\n\n  .heading{\n    background: var(--themecolor3) !important;\n  }\n\n  .contact, .url-info, .table-section{\n    border: 2px solid var(--themecolor3) !important;\n  }\n\n  .comments-table{\n    border: var(--themecolor3);\n  }\n\n  .comments-table tr td{\n    background: var(--themecolor4) !important;\n  }\n  .comments-table p {\n    color: var(--themecolor1);\n  }\n\n  .profile-info .inner{\n    color: var(--themecolor5);\n  }\n\n  .profile-info{\n    border: 2px solid var(--themecolor4);\n  }\n\n  .details-table tr td{\n    background: var(--themecolor3) !important;\n    color: var(--themecolor5) !important;\n  }\n\n  .count {\n    color: var(--themecolor4);\n  }\n\n  footer, nav .top{\n    background: var(--themecolor2) !important;\n  }\n\n  nav .links{\n    background: var(--themecolor3);\n  }\n\n  .comment-replies{\n    border: 4px solid var(--themecolor5);\n  }\n  ";
      outImg = "Template_Vampyr.png";
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
