const BORDER_SIZE = 4;
const panel = document.getElementById("previewContainer");
const lpanel = document.getElementById("editorContainer");

let m_pos;

function resize(e) {
  var w = window.innerWidth;

  const dx = m_pos - e.x;
  m_pos = e.x;
  panel.style.width = (parseInt(getComputedStyle(panel, '').width) + dx) + "px";
  lpanel.style.width = (w - (parseInt(getComputedStyle(panel, '').width))) + "px";
  /*
  var codeBoxes = $(".CodeMirror").length;
  for (var i = 0; i < codeBoxes; i++){
    document.getElementsByClassName("CodeMirror")[i].style.setProperty ('width', ((w-(parseInt(getComputedStyle(panel,'').width)))-30) + "px", 'important');
    //document.getElementsByClassName("CodeMirror")[i].style.width = ((w-(parseInt(getComputedStyle(panel,'').width)))-100) + "px";
  }
  */
}

document.addEventListener("mousedown", function(e) {
  if (e.offsetX < BORDER_SIZE) {
    m_pos = e.x;
    document.addEventListener("mousemove", resize, false);
  }
}, false);

document.addEventListener("mouseup", function() {
  document.removeEventListener("mousemove", resize, false);
}, false);

var CSSeditor;
var aboutMeeditor;
var meeteditor;
var generaleditor;
var musiceditor;
var movieseditor;
var tveditor;
var bookseditor;
var heroeseditor;
$(document).ready(function() {
  //CSS
  var code = $(".codemirror-textarea")[0];
  CSSeditor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    tabsize: 1,
    mode: "css",
    theme: "abcdef",
    lineWrapping: true
  });

  //About Me
  code = $(".codemirror-textarea")[1];
  aboutMeeditor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    tabsize: 1,
    mode: "xml",
    theme: "abcdef",
    lineWrapping: true
  });

  //About Me
  code = $(".codemirror-textarea")[2];
  meeteditor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    tabsize: 1,
    mode: "xml",
    theme: "abcdef",
    lineWrapping: true
  });

  //About Me
  code = $(".codemirror-textarea")[3];
  generaleditor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    tabsize: 1,
    mode: "xml",
    theme: "abcdef",
    lineWrapping: true
  });

  //About Me
  code = $(".codemirror-textarea")[4];
  musiceditor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    tabsize: 1,
    mode: "xml",
    theme: "abcdef",
    lineWrapping: true
  });

  //About Me
  code = $(".codemirror-textarea")[5];
  movieseditor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    tabsize: 1,
    mode: "xml",
    theme: "abcdef",
    lineWrapping: true
  });

  //About Me
  code = $(".codemirror-textarea")[6];
  tveditor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    tabsize: 1,
    mode: "xml",
    theme: "abcdef",
    lineWrapping: true
  });

  //About Me
  code = $(".codemirror-textarea")[7];
  bookseditor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    tabsize: 1,
    mode: "xml",
    theme: "abcdef",
    lineWrapping: true
  });

  //About Me
  code = $(".codemirror-textarea")[8];
  heroeseditor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    tabsize: 1,
    mode: "xml",
    theme: "abcdef",
    lineWrapping: true
  });
});

window.onload = sizeBoxes();

function sizeBoxes() {
  var codeBoxes = $(".CodeMirror").length;
  var container = $("#editorContainer");

  for (var i = 0; i < codeBoxes; i++) {
    $(".CodeMirror")[i].style.width = container.style.width;
  }
}




//Look, I don't like it either, but this is the easiest way for me to do this.
//iFrames don't work well due to security, passing data from a text file didn't work
//for the same reason. So, fuck it, here's a big fat string getting dumped into
//a div. I'm not messing with PHP right now and you can't make me.

window.onload = openDefaultProfile();

function openDefaultProfile() {
  /*
  if (window.location.href.indexOf("github") > -1){
    document.getElementById("themeMixer").style.display = "none";
    document.getElementById("themeMixer").style.right = "auto";
    document.getElementById("themeMixer").style.left = "-99999px";
  }
*/
  var defaultProf = `
  <html lang="en"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="https://spacehey.com/favicon.ico">
    <link rel="stylesheet" href="https://spacehey.com/css/my.css?c=17723256eac5b61bdd6eee9312fb1cded390a8487210814d16078265d98a13e9">

    <title>SpaceHey's Profile | SpaceHey.com</title>
    <meta name="title" content="SpaceHey's Profile | SpaceHey.com">
    <meta name="description" content="SpaceHey.com ??? a space for friends. It's a friendly place to have fun, meet friends, and be creative!">

    <meta property="og:type" content="website">
    <meta property="og:title" content="SpaceHey's Profile | SpaceHey.com">
    <meta property="og:description" content="SpaceHey.com ??? a space for friends. It's a friendly place to have fun, meet friends, and be creative!">
    <meta property="og:image" content="https://spacehey.com/img/meta.png?v=2">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="SpaceHey's Profile | SpaceHey.com">
    <meta property="twitter:description" content="SpaceHey.com ??? a space for friends. It's a friendly place to have fun, meet friends, and be creative!">
    <meta property="twitter:image" content="https://spacehey.com/img/meta.png?v=2">

    <link rel="apple-touch-icon" sizes="180x180" href="https://spacehey.com/img/favicons/apple-touch-icon.png?v=2">
    <link rel="icon" type="image/png" sizes="32x32" href="https://spacehey.com/img/favicons/favicon-32x32.png?v=2">
    <link rel="icon" type="image/png" sizes="16x16" href="https://spacehey.com/img/favicons/favicon-16x16.png?v=2">
    <link rel="manifest" href="https://spacehey.com/img/favicons/site.webmanifest?v=2">
    <link rel="mask-icon" href="https://spacehey.com/img/favicons/safari-pinned-tab.svg?v=2" color="#1D4ED8">
    <meta name="apple-mobile-web-app-title" content="SpaceHey">
    <meta name="application-name" content="SpaceHey">
    <meta name="msapplication-TileColor" content="#1D4ED8">
    <meta name="msapplication-config" content="https://spacehey.com/img/favicons/browserconfig.xml?v=2">
    <meta name="theme-color" content="#1D4ED8">

    <link href="https://spacehey.com/opensearch.xml" rel="search" title="Search SpaceHey" type="application/opensearchdescription+xml">



  <style type="text/css">.c1-ui-state-hover {background-color:yellow !important; padding:5px !important }</style></head>
  <body>
  <!-- [spacehey.com] SpaceHey Server: vps-1 - Session Handler: redis IN USE - {"PHPSESSID":"kppmf5th99o197aftd2divhenl","spacehey_user_notice":"agreed","SH_TEST":"yes"} -->

  <div class="container">
    <nav>
          <div class="top">
        <div class="left">
          <a href="https://spacehey.com/">
                      <img class="logo" src="SpaceHeyImages/logo_optimized.svg" alt="SpaceHey.com">
          </a>
                        </div>
        <div class="center">
                    <form action="https://spacehey.com/search">
              <!--<label for="web">The Web</label>
              <input type="radio" id="web" name="search_target" value="web">
              <label for="spacehey">SpaceHey</label>
              <input type="radio" id="spacehey" name="search_target" value="spacehey" checked>-->
              <label for="q">Search Users:</label>
              <div class="search-wrapper">
                <input id="q" type="text" name="q" autocomplete="off">
              </div>
              <button type="submit">Search</button>
            </form>
                </div>
        <div class="right">
          <a href="https://spacehey.com/help">Help</a> | <form action="https://spacehey.com/logout" method="post" class="logout-form"><button class="logout-btn" type="submit" name="submit">LogOut</button></form>      </div>
      </div>
      <ul class="links">
              <li class="active"><a href="https://spacehey.com/home">Home</a></li>
        <li class=""><a href="https://spacehey.com/browse">Browse</a></li>
        <li class=""><a href="https://spacehey.com/search">Search</a></li>
        <li class=""><a href="https://im.spacehey.com">Messages</a></li>
        <li class=""><a href="https://blog.spacehey.com">Blog</a></li>
        <li class=""><a href="https://spacehey.com/bulletins">Bulletins</a></li>
        <li class=""><a href="https://forum.spacehey.com/">Forum</a></li>
        <li class=""><a href="https://groups.spacehey.com">Groups <img src="SpaceHeyImages/new.png" class="icon" aria-hidden="true" loading="lazy" alt="New Icon"></a></li>
        <li class=""><a href="https://layouts.spacehey.com">Layouts</a></li>
        <li class=""><a href="https://spacehey.com/topmusic">Music Charts</a></li>
        <li class=""><a href="https://spacehey.com/favorites">Favorites</a></li>
        <li class=""><a href="https://spacehey.com/invite">Invite</a></li>
              <li class=""><a href="https://spacehey.com/about">About</a></li>
            </ul>
    </nav>
    <main>
      <div class="row profile">
        <div class="col w-40 left">
          <h1>SpaceHey <span class="verified-info" title="Verified User" data-reason="Official Brand Account"><img src="SpaceHeyImages/tick_light_blue.png" class="icon verified" aria-hidden="true" loading="lazy" alt="Tick_light_blue Icon"></span></h1>
                  <div class="general-about">
            <div class="profile-pic">
              <img src="SpaceHeyImages/mainprofile.png" alt="profile picture">
            </div>
            <div class="details">
              <p>"Having fun!"</p><p>SPACEHEY.COM - A SPACE FOR FRIENDS</p>                                  </div>
          </div>
          <div class="mood">
            <p><b>Mood:</b> Extremely happy!</p>
            <p>
              <b>View my:
                <a href="https://blog.spacehey.com/user?id=2">Blog</a>
                | <a href="/userbulletins?id=2">Bulletins</a>              | <a href="https://forum.spacehey.com/user?id=2">Forum Topics</a>
                            </b>
            </p>
          </div>
          <div class="contact">
            <div class="heading">
              <h4>Contacting SpaceHey</h4>
            </div>
            <div class="inner">
              <div class="f-row">
                <div class="f-col">
                                    <a href="/unfriend?id=2">
                      <img src="SpaceHeyImages/delete.png" class="icon" aria-hidden="true" loading="lazy" alt="Delete Icon">                    Remove Friend
                    </a>
                                </div>
                <div class="f-col">
                                    <a href="/addfavorite?id=2">
                      <img src="SpaceHeyImages/award_star_add.png" class="icon" aria-hidden="true" loading="lazy" alt="Award_star_add Icon">                    Add to Favorites
                    </a>
                                </div>
              </div>
              <div class="f-row">
                <div class="f-col">
                  <a href="https://im.spacehey.com?user=2">
                    <img src="SpaceHeyImages/comment.png" class="icon" aria-hidden="true" loading="lazy" alt="Comment Icon">                  Send Message
                  </a>
                </div>
                <div class="f-col">
                  <a href="https://im.spacehey.com/new?text=https://spacehey.com/spacehey">
                    <img src="SpaceHeyImages/arrow_right.png" class="icon" aria-hidden="true" loading="lazy" alt="Arrow_right Icon">                  Forward to Friend
                  </a>
                </div>
              </div>
              <div class="f-row">
                <div class="f-col">
                  <a href="https://im.spacehey.com?user=2">
                    <img src="SpaceHeyImages/email.png" class="icon" aria-hidden="true" loading="lazy" alt="Email Icon">                  Instant Message
                  </a>
                </div>
                <div class="f-col">
                  <a href="/block?id=2">
                    <img src="SpaceHeyImages/exclamation.png" class="icon" aria-hidden="true" loading="lazy" alt="Exclamation Icon">                  Block User
                  </a>
                </div>
              </div>
              <div class="f-row">
                <div class="f-col">
                  <a href="/soon?new">
                    <img src="SpaceHeyImages/group_add.png" class="icon" aria-hidden="true" loading="lazy" alt="Group_add Icon">                  Add to Group
                  </a>
                </div>
                <div class="f-col">
                  <a href="/report?type=user&amp;id=2">
                    <img src="SpaceHeyImages/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                  Report User
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="url-info">
            <p><b>SpaceHey URL:</b></p>
            <p>https://spacehey.com/spacehey</p>
                    </div>
          <div class="table-section">
            <div class="heading">
              <h4>SpaceHey's Interests</h4>
            </div>
            <div class="inner">
              <table class="details-table" cellspacing="3" cellpadding="3">
                <tbody>
                  <tr>
                    <td><p>General</p></td>
                    <td><p>Having fun!</p></td>
                  </tr>
                  <tr>
                    <td><p>Music</p></td>
                    <td><p></p></td>
                  </tr>
                  <tr>
                    <td><p>Movies</p></td>
                    <td><p></p></td>
                  </tr>
                  <tr>
                    <td><p>Television</p></td>
                    <td><p></p></td>
                  </tr>
                  <tr>
                    <td><p>Books</p></td>
                    <td><p></p></td>
                  </tr>
                  <tr>
                    <td><p>Heroes</p></td>
                    <td><p>Tom is our hero.</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
                    </div>
          <div class="table-section">
            <div class="heading">
              <h4>SpaceHey's Links</h4>
            </div>
            <div class="inner">
              <table class="details-table" cellspacing="3" cellpadding="3">
                <tbody>
                                  <tr>
                    <td>
                      <p>
                        <a href="https://www.instagram.com/spacehey_com" target="_blank" rel="noopener">
                          <img src="SpaceHeyImages/instagam.png" class="icon" aria-hidden="true" loading="lazy" alt="&quot;Instagam&quot; Icon"> Instagram                      </a>
                      </p>
                    </td>
                    <td>
                      <p>
                        <a href="https://www.instagram.com/spacehey_com" target="_blank" rel="noopener">
                          @spacehey_com                      </a>
                      </p>
                    </td>
                  </tr>
                                  <tr>
                    <td>
                      <p>
                        <a href="https://twitter.com/space_hey" target="_blank" rel="noopener">
                          <img src="SpaceHeyImages/twitter.png" class="icon" aria-hidden="true" loading="lazy" alt="&quot;Twitter&quot; Icon"> Twitter                      </a>
                      </p>
                    </td>
                    <td>
                      <p>
                        <a href="https://twitter.com/space_hey" target="_blank" rel="noopener">
                          @space_hey                      </a>
                      </p>
                    </td>
                  </tr>
                                  <tr>
                    <td>
                      <p>
                        <a href="https://www.youtube.com/channel/UCKdzZjlwVLGgLaQQYbfG_RA" target="_blank" rel="noopener">
                          <img src="SpaceHeyImages/youtube.png" class="icon" aria-hidden="true" loading="lazy" alt="&quot;Youtube&quot; Icon"> YouTube                      </a>
                      </p>
                    </td>
                    <td>
                      <p>
                        <a href="https://www.youtube.com/channel/UCKdzZjlwVLGgLaQQYbfG_RA" target="_blank" rel="noopener">
                          YouTube                      </a>
                      </p>
                    </td>
                  </tr>
                                </tbody>
              </table>
            </div>
                    </div>
        </div>
        <div class="col right">
                  <div class="profile-info">
            <div class="inner">
              <h3>SpaceHey is your Friend.</h3>
            </div>
          </div>
                  <div class="blog-preview">
            <h4>SpaceHey's Latest Blog Entries [<a href="https://blog.spacehey.com/user?id=2">View Blog</a>]</h4>
                      <p>Hello World! (<a href="https://blog.spacehey.com/entry?id=1">view more</a>)</p>
                    </div>
          <div class="blurbs">
            <div class="heading">
              <h4>SpaceHey's Blurbs</h4>
            </div>
            <div class="inner">
              <div class="section">
                <h4>About me:</h4>
                <p></p><h2>Hello!</h2>
  We are <b>SpaceHey.com</b>!
  <p></p>
                            </div>
              <div class="section">
                <h4>Who I'd like to meet:</h4>
                <p>We'd like to meet <b>all of you</b>! :)</p>
                            </div>
            </div>
          </div>
          <div class="friends">
            <div class="heading">
              <h4>SpaceHey's Friend Space</h4>
              <a class="more" href="/friends?id=2">[view all]</a>
            </div>
            <div class="inner">
                          <p><b>SpaceHey has <span class="count">124964</span> friends.</b></p>
              <div class="friends-grid">
                              <div class="person">
                  <a href="#">
                    <p>Alfred Trujillo</p>
                  </a>
                  <a href="#">
                    <img src="SpaceHeyImages/128497_d670439c73465ceb83a3282ea0fde995.jpg" alt="profile picture" loading="lazy">
                  </a>
                </div>
                              <div class="person">
                  <a href="#">
                    <p>clawedbeauty</p>
                  </a>
                  <a href="#">
                    <img src="SpaceHeyImages/128496_2f5a4f641b5e1d0d3a0464827376a2db.jpg" alt="profile picture" loading="lazy">
                  </a>
                </div>
                              <div class="person">
                  <a href="#">
                    <p>IntimateAhole</p>
                  </a>
                  <a href="#">
                    <img src="SpaceHeyImages/0_default.png" alt="profile picture" loading="lazy">
                  </a>
                </div>
                              <div class="person">
                  <a href="#">
                    <p>KathrynE297</p>
                  </a>
                  <a href="#">
                    <img src="SpaceHeyImages/128494_689a07a40c16320ef9ebb69774dd055b.jpg" alt="profile picture" loading="lazy">
                  </a>
                </div>
                              <div class="person">
                  <a href="#">
                    <p>StarLord</p>
                  </a>
                  <a href="#">
                    <img src="SpaceHeyImages/0_default.png" alt="profile picture" loading="lazy">
                  </a>
                </div>
                              <div class="person">
                  <a href="#">
                    <p>Kristen Lockwood</p>
                  </a>
                  <a href="#">
                    <img src="SpaceHeyImages/128492_6f7ed93350da27eb46f643b053c146dd.jpg" alt="profile picture" loading="lazy">
                  </a>
                </div>
                              <div class="person">
                  <a href="#">
                    <p>Ash</p>
                  </a>
                  <a href="#">
                    <img src="SpaceHeyImages/0_default.png" alt="profile picture" loading="lazy">
                  </a>
                </div>
                              <div class="person">
                  <a href="#">
                    <p>Matt Saundry</p>
                  </a>
                  <a href="#">
                    <img src="SpaceHeyImages/128490_d8cab7d91bfbf12288c13d3f362991b9.jpg" alt="profile picture" loading="lazy">
                  </a>
                </div>
                            </div>
            </div>
          </div>
          <div class="friends" id="comments">
            <div class="heading">
              <h4>SpaceHey's Friends Comments</h4>
            </div>
            <div class="inner">
                          <p>
                <b>
                  Displaying <span class="count">20</span> of <span class="count">620</span> comments
                  ( <a href="/comments?id=2">View all</a> | <a href="/addcomment?id=2">Add Comment</a> )
                </b>
              </p>
              <table class="comments-table" cellspacing="0" cellpadding="3" bordercolor="ffffff" border="1">
                <tbody>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>(????????????)??? Beat</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/127733_7ddcf4f2f7fe3ff56c39c680fe399ad3.jpg" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1623059282" style="opacity: 1;">6 days ago</time></b></p>
                      <p>Awesome place brings me back to my middle and high school years, feel free to add me</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=237338">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=237338">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>Paisley</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/23510_7b3ddb060993892823d20b13f113bdfb.jpg" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1622678149" style="opacity: 1;">10 days ago</time></b></p>
                      <p>Hello! If anyone is reading this, please give me an add. looking for penpals</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=235680">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=235680">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>DarkMiryam</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/127331_ba3afb0f971e803e8d8e4374d91998f8.jpg" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1622618418" style="opacity: 1;">11 days ago</time></b></p>
                      <p>Thanks for bringing the good old times back ????<br>I will start working on my profilo tonight ????<br>P.s. Friendship requests are more than welcome!!</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=235352">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=235352">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>Deej</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/127332_bf33f9dc87bdc8e48ba4a810f4e7cd7b.png" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1622618411" style="opacity: 1;">11 days ago</time></b></p>
                      <p><b> !!! </b></p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=235351">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=235351">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>Azizi Chesca</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/1.jpg" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1622615363" style="opacity: 1;">11 days ago</time></b></p>
                      <p>hello</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=235346">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=235346">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>Quentin Kokta QK</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/124861_0b4dd5709a49f9dc2c7adc69dcbb42ca.jpg" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1622610543" style="opacity: 1;">11 days ago</time></b></p>
                      <p>WOW</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=235337">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=235337">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>CVMDOSIV 4TWNY</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/127316_f1b21a4cc646d41b195b29b98921d29d.jpg" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1622603690" style="opacity: 1;">11 days ago</time></b></p>
                      <p>Omg thank yall so much iv been waiting forever it feels like.  I have missed yall.  ????????????????</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=235319">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=235319">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>CVMDOSIV 4TWNY</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/2.jpg" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1622603688" style="opacity: 1;">11 days ago</time></b></p>
                      <p>Omg thank yall so much iv been waiting forever it feels like.  I have missed yall.  ????????????????</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=235318">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=235318">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>Alexa&amp;Ali</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/127061_f59528323bfb7563c70072bb758e99a4.jpg" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1622552767" style="opacity: 1;">12 days ago</time></b></p>
                      <p>Thank you for this amazing platform!</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=234968">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=234968">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>Christopher</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/127052_3d36f0a76f3a89a75ee30e1c45731716.jpg" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1622343128" style="opacity: 1;">2 weeks ago</time></b></p>
                      <p>Thank you for resurrecting a wonderful and nostalgic platform that had personality, uniqueness, and charm.</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=234538">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=234538">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>William</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/126328_69539240638debf42259534aef547543.jpg" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1622292140" style="opacity: 1;">15 days ago</time></b></p>
                      <p>Two things i remember and enjoyed from myspace were:<br><br><br>You were able to see who left you kudos, so you could thank people for dropping in.<br><br><br>You were able to see who your subscribers were, so you could gage your reach.<br><br><br>Am I missing something? If I am, could someone let me know.<br><br>If it can't be done, is someone working on that?<br><br>Loving the platform!!<br><br><br>Cheers,</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=234339">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                          <br><br>
                      <div class="comment-replies">
                                              <div class="comment-reply">
                          <p>I concur, William. Myspace had a sort of innocence to it...it was your own private page, and most of us only had maybe 25 to 50 close friends that would take the time to visit your page for updates about you. It was wonderful, personal, and the relationships were meaningful.</p>
                          <p>
                            <small>
                              by
                              <a href="#"><b>Christopher</b></a>;
                              <time class="ago" data-timestamp="1622342723" style="opacity: 1;">2 weeks ago</time>;
                                                          <a href="https://spacehey.com/report?type=comment&amp;id=234537">
                                Report
                              </a>
                            </small>
                          </p>
                        </div>
                                            </div>
                                                              <a href="/addcomment?id=2&amp;reply=234339">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>Frannie</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/0_default.png" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1622177619" style="opacity: 1;">16 days ago</time></b></p>
                      <p>Thank you for the nostalgia.</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=234081">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=234081">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>Jasmine</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/0_default.png" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1622153387" style="opacity: 1;">16 days ago</time></b></p>
                      <p>I am so happy rn!</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=233985">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=233985">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>Shahid</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/0_default.png" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1621760271" style="opacity: 1;">3 weeks ago</time></b></p>
                      <p>Hye, thank you for bringing back my teen memories. ????</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=232463">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=232463">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>K1Y0_1S_D3AD</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/0_default.png" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1621205128" style="opacity: 1;">27 days ago</time></b></p>
                      <p>r a w r</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=230069">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                          <br><br>
                      <div class="comment-replies">
                                              <div class="comment-reply">
                          <p>RaWr XD</p>
                          <p>
                            <small>
                              by
                              <a href="#"><b>???? ???? ???? ???? ????    ???? ???? ???? ????    ???? ????   ???? ???? ???? ???? ???? ???? ???? ????</b></a>;
                              <time class="ago" data-timestamp="1621212264" style="opacity: 1;">27 days ago</time>;
                                                          <a href="https://spacehey.com/report?type=comment&amp;id=230091">
                                Report
                              </a>
                            </small>
                          </p>
                        </div>
                                            </div>
                                                              <a href="/addcomment?id=2&amp;reply=230069">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>Paisley</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/3.jpg" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1620934534" style="opacity: 1;">1 month ago</time></b></p>
                      <p>IM BACK! <br><br><br>ADD ME UP! <img src="SpaceHeyImages/emoticon_smile.png" class="icon" aria-hidden="true" loading="lazy" alt="Emoticon_smile Icon"> GET ME TO 1k</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=228953">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=228953">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                  <tr>
                    <td>
                      <a href="#">
                        <p>????Xx.RJ.xX????</p>
                      </a>
                      <a href="#">
                        <img src="SpaceHeyImages/0_default.png" alt="profile picture" loading="lazy">
                      </a>
                    </td>
                    <td>
                      <p><b><time class="ago" data-timestamp="1620686244" style="opacity: 1;">1 month ago</time></b></p>
                      <p>ADD ME!</p>
                                          <p class="report">
                        <a href="https://spacehey.com/report?type=comment&amp;id=227931">
                          <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="Flag_red Icon">                        Report Comment
                        </a>
                      </p>
                                                              <a href="/addcomment?id=2&amp;reply=227931">
                        <button>Add Reply</button>
                      </a>
                                        </td>
                  </tr>
                                </tbody>
              </table>
                          <div class="pagination">
                <a class="next" href="/comments?id=2&amp;page=2">
                  <button>
                    Next Page
                  </button>
                </a>
              </div>
                                    </div>
          </div>

        </div>
      </div>

    </main>
    <footer>
      <p>
        brought to you by <a href="https://tibushlabs.de" target="_blank" rel="noopener">tibush labs</a>.
      </p>
      <p>       <i>Disclaimer: This is a fan-based project and is not affiliated with MySpace?? in any way.</i>
      </p>
      <ul class="links">
              <li><a href="https://spacehey.com/about">About</a></li>
        <li><a href="https://spacehey.com/news">News</a></li>
        <li><a href="https://spacehey.com/rules">Rules</a></li>
        <li><a href="https://spacehey.com/credits">Credits</a></li>
        <li><a href="https://rss.spacehey.com">RSS</a></li>
        <li><a href="https://spacehey.com/press">Press</a></li>
        <li><a href="https://spacehey.com/tos">Terms</a></li>
        <li><a href="https://spacehey.com/privacy">Privacy</a></li>
        <li><a href="https://tibushlabs.de/imprint">Imprint</a></li>
        <li><a href="mailto:info@tibush.com?subject=SpaceHey.com">Contact SpaceHey</a></li>
        <li><a href="mailto:info@tibush.com?subject=Advertise%20on%20SpaceHey.com">Advertise</a></li>
        <li><a href="https://status.spacehey.com">Status</a></li>
        <li><a href="https://spacehey.com/shop">SpaceHey Shop <img src="SpaceHeyImages/basket.png" class="icon" aria-hidden="true" loading="lazy" alt="Basket Icon"></a></li>
      </ul>
      <p class="copyright">
        <a href="https://spacehey.com/">??2021 SpaceHey.com All Rights Reserved.</a>
      </p>
    </footer>
  </div>


  <link rel="stylesheet" href="https://spacehey.com/css/important.css?c=bcb835f9120d9fa7b157b928286ea870e41d421e40f9e581afeb34363231528a">

  <script src="" async="" defer=""></script>
  <noscript><img src="https://tibushlabs.de/a/post"></noscript>


  </body></html>
`;
  document.getElementById("previewContainer").innerHTML = defaultProf;
}
