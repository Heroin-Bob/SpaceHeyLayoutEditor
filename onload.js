alert("Hi!<br><br>The new home for the layout editor is tommypanzram.neocities.org. This page will still exist but will soon begin automatically redirecting users. So, if you have this page bookmarked you should update it.<br><br>Enjoy!");

const BORDER_SIZE = 4;
const panel = document.getElementById("previewContainer");
const lpanel = document.getElementById("editorContainer");
/*/*
let m_pos;

function resize(e) {
  var w = window.innerWidth;

  const dx = m_pos - e.x;
  m_pos = e.x;
  panel.style.width = (parseInt(getComputedStyle(panel, '').width) + dx) + "px";
  lpanel.style.width = (w - (parseInt(getComputedStyle(panel, '').width))) + "px";
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
*/

const resizer = document.getElementById('resizer');
let isResizing = false;

resizer.addEventListener('mousedown', (event) => {
  isResizing = true;
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', () => {
    isResizing = false;
    document.removeEventListener('mousemove', handleMouseMove);
  });
});


function handleMouseMove(event) {
  if (isResizing) {
    const leftColumnWidth = event.clientX - lpanel.getBoundingClientRect().left;
    lpanel.style.width = `${leftColumnWidth}px`;
    panel.style.width = `calc(100% - ${leftColumnWidth}px)`;
  }
}






var CSSeditor;
var aboutMeeditor;
var meeteditor;
var generaleditor;
var musiceditor;
var movieseditor;
var tveditor;
var bookseditor;
var heroeseditor;
var blogeditor;
var bulletineditor;
var groupeditor;

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

  //About Me
  code = $(".codemirror-textarea")[9];
  blogeditor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    tabsize: 1,
    mode: "xml",
    theme: "abcdef",
    lineWrapping: true
  });

  //About Me
  code = $(".codemirror-textarea")[10];
  bulletineditor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    tabsize: 1,
    mode: "xml",
    theme: "abcdef",
    lineWrapping: true
  });

  code = $(".codemirror-textarea")[11];
  groupeditor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    tabsize: 1,
    mode: "xml",
    theme: "abcdef",
    lineWrapping: true
  });

  const newArr = retrieveString();
  
  CSSeditor.setValue(newArr[0]);
  aboutMeeditor.setValue(newArr[1]);
  meeteditor.setValue(newArr[2]);
  generaleditor.setValue(newArr[3]);
  musiceditor.setValue(newArr[4]);
  movieseditor.setValue(newArr[5]);
  tveditor.setValue(newArr[6]);
  bookseditor.setValue(newArr[7]);
  heroeseditor.setValue(newArr[8]);
  blogeditor.setValue(newArr[9]);
  bulletineditor.setValue(newArr[10]);
  groupeditor.setValue(newArr[11]);

  

});

function sizeBoxes() {
  var codeBoxes = $(".CodeMirror").length;
  var container = $("#editorContainer");

  for (var i = 0; i < codeBoxes; i++) {
    if ($(".CodeMirror")[i].style.width){
      $(".CodeMirror")[i].style.width = container.style.width;
    }
    
  }
}




//Look, I don't like it either, but this is the easiest way for me to do this.
//iFrames don't work well due to security, passing data from a text file didn't work
//for the same reason. So, fuck it, here's a big fat string getting dumped into
//a div. I'm not messing with PHP right now and you can't make me.

/*window.onload = openDefaultProfile();*/

function openDefaultProfile() {
  var defaultProf = `
  <html lang="en"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="https://spacehey.com/favicon.ico">
    <link rel="stylesheet" href="https://spacehey.com/css/my.css?c=17723256eac5b61bdd6eee9312fb1cded390a8487210814d16078265d98a13e9">

    <title>SpaceHey's Profile | SpaceHey.com</title>
    <meta name="title" content="SpaceHey's Profile | SpaceHey.com">
    <meta name="description" content="SpaceHey.com — a space for friends. It's a friendly place to have fun, meet friends, and be creative!">

    <meta property="og:type" content="website">
    <meta property="og:title" content="SpaceHey's Profile | SpaceHey.com">
    <meta property="og:description" content="SpaceHey.com — a space for friends. It's a friendly place to have fun, meet friends, and be creative!">
    <meta property="og:image" content="https://spacehey.com/img/meta.png?v=2">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="SpaceHey's Profile | SpaceHey.com">
    <meta property="twitter:description" content="SpaceHey.com — a space for friends. It's a friendly place to have fun, meet friends, and be creative!">
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
            <li class=""><a href="#">Home</a></li>
            <li class=""><a href="#">Browse</a></li>
            <li class=""><a href="#">Search</a></li>
            <li class=""><a href="#">Messages</a></li>
            <li class="active"><a href="#">Blog</a></li>
            <li class=""><a href="#">Bulletins</a></li>
            <li class=""><a href="#">Forum</a></li>
            <li class=""><a href="#">Groups</a></li>
            <li class=""><a href="#">Layouts</a></li>
            <li class=""><a href="#">Favorites</a></li>
            <li class=""><a href="#">Invite</a></li>
            <li class="">
                <a href="#" title="SpaceHey Mobile"><img src="https://static.spacehey.net/icons/new.png" class="icon" aria-hidden="true" loading="lazy" alt=""> App</a>
            </li>
            <li><a href="#">Shop</a></li>
            <li class=""><a href="#">About</a></li>
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
                        <p>(っ◔◡◔)っ Beat</p>
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
                      <p>Thanks for bringing the good old times back 🖤<br>I will start working on my profilo tonight 🤩<br>P.s. Friendship requests are more than welcome!!</p>
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
                      <p>Omg thank yall so much iv been waiting forever it feels like.  I have missed yall.  💪💪💪💪</p>
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
                      <p>Omg thank yall so much iv been waiting forever it feels like.  I have missed yall.  💪💪💪💪</p>
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
                      <p>Hye, thank you for bringing back my teen memories. 😁</p>
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
                              <a href="#"><b>𝓕 𝓻 𝓪 𝓷 𝓴    𝓭 𝓾 𝓴 𝓮    𝓸 𝓯   𝓼 𝓹 𝓪 𝓬 𝓮 𝓱 𝓮 𝔂</b></a>;
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
                        <p>🖤Xx.RJ.xX🖤</p>
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
      <p>       <i>Disclaimer: This is a fan-based project and is not affiliated with MySpace® in any way.</i>
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
        <a href="https://spacehey.com/">©2021 SpaceHey.com All Rights Reserved.</a>
      </p>
    </footer>
  </div>


  <link rel="stylesheet" href="https://spacehey.com/css/important.css?c=bcb835f9120d9fa7b157b928286ea870e41d421e40f9e581afeb34363231528a">

  <script src="" async="" defer=""></script>
  <noscript><img src="https://tibushlabs.de/a/post"></noscript>


  </body></html>
`;

  document.getElementById("previewContainer").innerHTML = defaultProf;
  showBoxes([0,1,2,3,4,5,6,7,8,9,10,11]);
  removeBoxes([9,10,11]);
  
  

}

function openDefaultBlog(){
  var defaultProf = `
  <meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hello World! - SpaceHey's Blog | SpaceHey</title>

<link rel="preconnect" href="https://static.spacehey.net" crossorigin="">
<link rel="preconnect" href="https://cdn.spacehey.net" crossorigin="">

<script src="https://spacehey.com/js/script.js?v=0.39" async=""></script>

<link rel="stylesheet" href="https://spacehey.com/css/normalize.css">
<link rel="stylesheet" href="https://spacehey.com/css/my.css?c=d2869da4874e8ee7f4690ae5ccc17e6b468309019e0e10d23a7a22dfc3fa1473">

<link rel="dns-prefetch" href="https://static.spacehey.net">
<link rel="dns-prefetch" href="https://cdn.spacehey.net">

<link rel="shortcut icon" type="image/x-icon" href="https://spacehey.com/favicon.ico?v=2">

<meta name="title" content="Hello World! - SpaceHey's Blog | SpaceHey">
<meta name="description" content="Hello everyone! Welcome to SpaceHey!">

<meta property="og:type" content="website">
<meta property="og:title" content="Hello World! - SpaceHey's Blog | SpaceHey">
<meta property="og:description" content="Hello everyone! Welcome to SpaceHey!">
<meta property="og:image" content="https://external-media.spacehey.net/media/200x200,sc,s7JgvYDpxawV68cEzSryAVZMqxlu9yAKSMMaRn20Boo8=/https://cdn.spacehey.net/profilepics/2_942c747dfa91de093ccc26a18a172a1d.png?token=UiM9Y8QwbWPz4MAwyyvmO1fQGqvV7ULAiUqXfvuwZ5I&amp;expires=1702665497">
<meta property="og:site_name" content="SpaceHey">

<meta property="twitter:site" content="@spacehey">
<meta property="twitter:card" content="summary">
<meta property="twitter:title" content="Hello World! - SpaceHey's Blog | SpaceHey">
<meta property="twitter:description" content="Hello everyone! Welcome to SpaceHey!">
<meta property="twitter:image" content="https://external-media.spacehey.net/media/200x200,sc,s7JgvYDpxawV68cEzSryAVZMqxlu9yAKSMMaRn20Boo8=/https://cdn.spacehey.net/profilepics/2_942c747dfa91de093ccc26a18a172a1d.png?token=UiM9Y8QwbWPz4MAwyyvmO1fQGqvV7ULAiUqXfvuwZ5I&amp;expires=1702665497">
<meta name="twitter:label1" content="Category">
<meta name="twitter:data1" content="SpaceHey">
<link rel="apple-touch-icon" sizes="180x180" href="https://spacehey.com/img/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="https://spacehey.com/img/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="https://spacehey.com/img/favicons/favicon-16x16.png">
<link rel="mask-icon" href="https://spacehey.com/img/favicons/safari-pinned-tab.svg" color="#1D4ED8">
<link rel="manifest" href="https://spacehey.com/img/favicons/site.webmanifest">
<meta name="apple-mobile-web-app-title" content="SpaceHey">
<meta name="application-name" content="SpaceHey">
<meta name="msapplication-TileColor" content="#1D4ED8">
<meta name="msapplication-config" content="https://spacehey.com/img/favicons/browserconfig.xml">
<meta name="theme-color" content="#1D4ED8">

<link href="https://spacehey.com/opensearch.xml" rel="search" title="Search SpaceHey" type="application/opensearchdescription+xml">

<link rel="canonical" href="https://blog.spacehey.com/entry?id=1">

<!-- [spacehey.com] SpaceHey Server: webserver-2 -->

<div class="container">
    <nav class="">
        <div class="top">
            <div class="left">
                <a href="#">
                    <img class="logo logo-fallback" src="https://static.spacehey.net/img/logo_optimized.svg" alt="SpaceHey" fetchpriority="high" style="aspect-ratio: 55/14;">
                </a>

            </div>
            <div class="center">
                <form action="https://blog.spacehey.com/search" role="search">
                    <label for="q">Search Blog Entries:</label>
                    <div class="search-wrapper">
                        <input id="q" type="text" name="q" autocomplete="off">
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div class="right">
                <a href="#" rel="help">Help</a> |
                <form action="https://spacehey.com/logout" method="post" class="logout-form"><button class="logout-btn" type="submit" name="submit">LogOut</button></form> <br>
                <div class="support-right">
                    <a href="#">
              Support us
            </a>
                </div>
            </div>
        </div>
        <ul class="links">
            <li class=""><a href="#">Home</a></li>
            <li class=""><a href="#">Browse</a></li>
            <li class=""><a href="#">Search</a></li>
            <li class=""><a href="#">Messages</a></li>
            <li class="active"><a href="#">Blog</a></li>
            <li class=""><a href="#">Bulletins</a></li>
            <li class=""><a href="#">Forum</a></li>
            <li class=""><a href="#">Groups</a></li>
            <li class=""><a href="#">Layouts</a></li>
            <li class=""><a href="#">Favorites</a></li>
            <li class=""><a href="#">Invite</a></li>
            <li class="">
                <a href="#" title="SpaceHey Mobile"><img src="https://static.spacehey.net/icons/new.png" class="icon" aria-hidden="true" loading="lazy" alt=""> App</a>
            </li>
            <li><a href="#">Shop</a></li>
            <li class=""><a href="#">About</a></li>
        </ul>
    </nav>
    <main>

        <div class="row article blog-entry" itemscope="" itemtype="http://schema.org/Article">
            <div class="col w-20 left">
                <span itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
      <meta itemprop="name" content="SpaceHey">
      <meta itemprop="logo" content="https://spacehey.com/img/logo.svg">
    </span>
                <div class="edit-info">
                    <div class="profile-pic ">
                        <img class="pfp-fallback" src="SpaceHeyImages/mainprofile.png" alt="SpaceHey's profile picture" loading="lazy">
                    </div>
                    <div class="author-details">
                        <h4>
                            Published by
                            <span itemprop="author" itemscope="" itemtype="http://schema.org/Person">
            <meta itemprop="url" content="https://spacehey.com/profile?id=2">
            <span itemprop="name">
              <a href="#">SpaceHey <span class="verified-info" title="Verified User" data-reason="Official Brand Account"><img src="https://static.spacehey.net/icons2/tick_light_blue.png" class="icon verified" aria-hidden="true" loading="lazy" alt=""></span></a>
                            </span>
                            </span>
                        </h4>
                        <p class="publish-date">
                            published <time class="ago" itemprop="datePublished" content="2020-11-28" data-timestamp="1606570431" style="opacity: 1;">3 years ago</time><br> updated <time class="ago" itemprop="dateModified" content="2020-11-28" data-timestamp="1606598458" style="opacity: 1;">3 years ago</time> </p>
                        <p class="category">
                            <b>Category:</b> <a href="#">SpaceHey</a>
                        </p>
                        <p class="links">
                            <a href="#">
                                <img src="https://static.spacehey.net/icons/script.png" class="icon" aria-hidden="true" loading="lazy" alt=""> <span class="m-hide">View</span> Blog
                            </a>
                            <a href="#">
                                <img src="https://static.spacehey.net/icons/user.png" class="icon" aria-hidden="true" loading="lazy" alt=""> <span class="m-hide">View</span> Profile
                            </a>
                            <a href="#" rel="nofollow">
                                <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt=""> Report Blog Entry
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col right">
                <h1 class="title" itemprop="headline name">Hello World!</h1>
                <div class="content" itemprop="articleBody">
                    <p></p>
                    <div>Hello everyone!</div>
                    <div>Welcome to SpaceHey!</div>
                    <div><br></div>
                    <div></div>
                    <p></p>
                </div>
                <br>
                <div class="kudos" id="kudos">
                    <p>
                        <b>
          <span class="count">475</span> Kudos
        </b>

                    </p>
                    <form method="post" action="/kudos">
                        <input type="hidden" name="id" value="1">
                        <input type="hidden" name="action" value="add">
                        <button class="kudos-btn" type="submit" name="amount" value="1">
            Give 1 Kudos.
          </button> —
                        <button class="kudos-btn" type="submit" name="amount" value="2">
            Give 2 Kudos
          </button>
                    </form>
                    <p></p>
                </div>
                <div class="comments" id="comments">
                    <div class="heading">
                        <h4>Comments</h4>
                    </div>
                    <div class="inner">
                        <meta itemprop="commentCount" content="90">
                        <p>
                            <b>
            Displaying <span class="count">20</span> of <span class="count">90</span> comments
            ( <a href="#">View all</a> | <a href="#">Add Comment</a> )
          </b>
                        </p>
                        <table class="comments-table" cellspacing="0" cellpadding="3" bordercolor="ffffff" border="1">
                            <tbody>
                                <tr class="">
                                    <td>
                                        <a href="#">
                                            <p>anti</p>
                                        </a>
                                        <a href="#">
                                            <img class="pfp-fallback" src="https://i.ibb.co/VSMZbwp/profilepic.png" alt="anti's profile picture" loading="lazy">
                                        </a>
                                    </td>
                                    <td>
                                        <p><b><time class="ago" data-timestamp="1702317363" style="opacity: 1;">3 days ago</time></b></p>
                                        <p>i stole some toast from a toaster like yesterday lol</p>
                                        <br>
                                        <p class="report">
                                            <a href="#" rel="nofollow">
                                                <img src="https://i.ibb.co/VSMZbwp/profilepic.png" class="icon" aria-hidden="true" loading="lazy" alt=""> Report Comment
                                            </a>
                                        </p>
                                        <br><br>
                                        <div class="comment-replies">
                                            <div class="comment-reply">
                                                <p>didnt know who it belonged to, but i stole it anyway lmaoooo what a loser no more toast for you</p>
                                                <p>
                                                    <small>
                        by
                        <a href="#"><b>anti</b></a>;
                        <time class="ago" data-timestamp="1702317430" style="opacity: 1;">3 days ago</time>;
                                                <a href="#" rel="nofollow">
                          Report
                        </a>
                      </small>
                                                </p>
                                            </div>
                                        </div>
                                        <a href="#">
                                            <button>Add Reply</button>
                                        </a>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                        <a href="#">
                                            <p>tord !? ( xmas ver )</p>
                                        </a>
                                        <a href="#">
                                            <img class="pfp-fallback" src="https://i.ibb.co/VSMZbwp/profilepic.png" alt="               tord !? ( ...'s profile picture" loading="lazy">
                                        </a>
                                    </td>
                                    <td>
                                        <p><b><time class="ago" data-timestamp="1702255739" style="opacity: 1;">4 days ago</time></b></p>
                                        <p>somebody stole my toast</p>
                                        <br>
                                        <p class="report">
                                            <a href="#" rel="nofollow">
                                                <img src="https://i.ibb.co/VSMZbwp/profilepic.png" class="icon" aria-hidden="true" loading="lazy" alt=""> Report Comment
                                            </a>
                                        </p>
                                        <a href="#">
                                            <button>Add Reply</button>
                                        </a>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                        <a href="#">
                                            <p>clifford</p>
                                        </a>
                                        <a href="#">
                                            <img class="pfp-fallback" src="https://i.ibb.co/VSMZbwp/profilepic.png" alt="clifford's profile picture" loading="lazy">
                                        </a>
                                    </td>
                                    <td>
                                        <p><b><time class="ago" data-timestamp="1702124314" style="opacity: 1;">5 days ago</time></b></p>
                                        <p>Hellooooooooooooooooo!</p>
                                        <br>
                                        <p class="report">
                                            <a href="#" rel="nofollow">
                                                <img src="https://i.ibb.co/VSMZbwp/profilepic.png" class="icon" aria-hidden="true" loading="lazy" alt=""> Report Comment
                                            </a>
                                        </p>
                                        <a href="#">
                                            <button>Add Reply</button>
                                        </a>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                        <a href="#">
                                            <p>☆ liv the rat !! [🌴🌈/🛒🏀]☆</p>
                                        </a>
                                        <a href="#">
                                            <img class="pfp-fallback" src="https://i.ibb.co/VSMZbwp/profilepic.png" alt="☆ liv the rat !! [🌴🌈/🛒🏀]☆'s profile picture" loading="lazy">
                                        </a>
                                    </td>
                                    <td>
                                        <p><b><time class="ago" data-timestamp="1701485478" style="opacity: 1;">13 days ago</time></b></p>
                                        <p>heeyyyyyy mannnnnn</p>
                                        <br>
                                        <p class="report">
                                            <a href="#" rel="nofollow">
                                                <img src="https://i.ibb.co/VSMZbwp/profilepic.png" class="icon" aria-hidden="true" loading="lazy" alt=""> Report Comment
                                            </a>
                                        </p>
                                        <a href="#">
                                            <button>Add Reply</button>
                                        </a>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                        <a href="#">
                                            <p>☆ liv the rat !! [🌴🌈/🛒🏀]☆</p>
                                        </a>
                                        <a href="#">
                                            <img class="pfp-fallback" src="https://i.ibb.co/VSMZbwp/profilepic.png" alt="☆ liv the rat !! [🌴🌈/🛒🏀]☆'s profile picture" loading="lazy">
                                        </a>
                                    </td>
                                    <td>
                                        <p><b><time class="ago" data-timestamp="1701485477" style="opacity: 1;">13 days ago</time></b></p>
                                        <p>heeyyyyyy mannnnnn</p>
                                        <br>
                                        <p class="report">
                                            <a href="#" rel="nofollow">
                                                <img src="https://i.ibb.co/VSMZbwp/profilepic.png" class="icon" aria-hidden="true" loading="lazy" alt=""> Report Comment
                                            </a>
                                        </p>
                                        <a href="#">
                                            <button>Add Reply</button>
                                        </a>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                        <a href="#">
                                            <p>3m0t10n41ax3l</p>
                                        </a>
                                        <a href="#">
                                            <img class="pfp-fallback" src="https://i.ibb.co/VSMZbwp/profilepic.png" alt="3m0t10n41ax3l's profile picture" loading="lazy">
                                        </a>
                                    </td>
                                    <td>
                                        <p><b><time class="ago" data-timestamp="1701415806" style="opacity: 1;">2 weeks ago</time></b></p>
                                        <p>Hello</p>
                                        <br>
                                        <p class="report">
                                            <a href="#" rel="nofollow">
                                                <img src="https://i.ibb.co/VSMZbwp/profilepic.png" class="icon" aria-hidden="true" loading="lazy" alt=""> Report Comment
                                            </a>
                                        </p>
                                        <a href="#">
                                            <button>Add Reply</button>
                                        </a>
                                    </td>
                                </tr>
                                <tr class="">

                                    <td>
                                        <a href="#">
                                            <p>holiv :333</p>
                                        </a>
                                        <a href="#">
                                            <img class="pfp-fallback" src="https://i.ibb.co/VSMZbwp/profilepic.png" alt="holiv :333's profile picture" loading="lazy">
                                        </a>
                                    </td>
                                    <td>
                                        <p><b><time class="ago" data-timestamp="1691274106" style="opacity: 1;">4 months ago</time></b></p>
                                        <p>I HATE THOSE EMOJISSSSS LOLZZZ</p>
                                        <br>
                                        <p class="report">
                                            <a href="#" rel="nofollow">
                                                <img src="https://i.ibb.co/VSMZbwp/profilepic.png" class="icon" aria-hidden="true" loading="lazy" alt=""> Report Comment
                                            </a>
                                        </p>
                                        <br><br>
                                        <div class="comment-replies">
                                            <div class="comment-reply">
                                                <p>haha now im gonna make you see it again</p>
                                                <p>
                                                    <small>
                        by
                        <a href="#"><b>Karl the stautiymum statue</b></a>;
                        <time class="ago" data-timestamp="1695339413" style="opacity: 1;">2 months ago</time>;
                                                <a href="#" rel="nofollow">
                          Report
                        </a>
                      </small>
                                                </p>
                                            </div>
                                        </div>
                                        <a href="#">
                                            <button>Add Reply</button>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="pagination">
                            <a class="next" href="#">
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
            brought to you by <a href="#" target="_blank" rel="noopener">tibush labs</a>
        </p>
        <p> <i>Disclaimer: This is a fan-based project and is not affiliated with MySpace® in any way.</i>
        </p>
        <ul class="links">
            <li><a href="#">About</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Rules</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Brand</a></li>
            <li><a href="#">Credits</a></li>
            <li><a href="#">RSS</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Imprint</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Report Abuse</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">SpaceHey Shop</a></li>
        </ul>
        <p class="copyright">
            <a href="#">©2023 SpaceHey.com All Rights Reserved.</a>
        </p>
    </footer>
</div>

<link rel="stylesheet" href="https://spacehey.com/css/important.css?c=994aafba76bf9205f4f293837ea21a3ecdfd1dbc4223ec4de3cac4e15c853257">
  `;
  document.getElementById("previewContainer").innerHTML = defaultProf;
  showBoxes([0,1,2,3,4,5,6,7,8,9,10,11]);
  removeBoxes([1,2,3,4,5,6,7,8,10,11]);
  


}
function openDefaultBulletin(){
  var defaultProf = `
  
  <html lang="en"><head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>"I'M FREE :D" by 96haato - Bulletins | SpaceHey</title>

  <link rel="preconnect" href="https://static.spacehey.net" crossorigin="">
  <link rel="preconnect" href="https://cdn.spacehey.net" crossorigin="">

  <script src="https://spacehey.com/js/script.js?v=0.39" async=""></script>
  
  <link rel="stylesheet" href="https://spacehey.com/css/normalize.css">
  <link rel="stylesheet" href="https://spacehey.com/css/my.css?c=d2869da4874e8ee7f4690ae5ccc17e6b468309019e0e10d23a7a22dfc3fa1473">
  
  <link rel="dns-prefetch" href="https://static.spacehey.net">
  <link rel="dns-prefetch" href="https://cdn.spacehey.net">

  <link rel="shortcut icon" type="image/x-icon" href="https://spacehey.com/favicon.ico?v=2">

  <meta name="title" content="&quot;I'M FREE :D&quot; by 96haato - Bulletins | SpaceHey">
  <meta name="description" content="MY RESUME IS IN! I'M FREE! :D Also I finally checked my grade specifics and I got an 89 on my interview! Literally the only thing she commented on was my talkin...">

  <meta property="og:type" content="website">
  <meta property="og:title" content="&quot;I'M FREE :D&quot; by 96haato - Bulletins | SpaceHey">
  <meta property="og:description" content="MY RESUME IS IN! I'M FREE! :D Also I finally checked my grade specifics and I got an 89 on my interview! Literally the only thing she commented on was my talkin...">
  <meta property="og:image" content="https://spacehey.com/img/meta_o.png">
  <meta property="og:site_name" content="SpaceHey">

  <meta property="twitter:site" content="@spacehey">
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:title" content="&quot;I'M FREE :D&quot; by 96haato - Bulletins | SpaceHey">
  <meta property="twitter:description" content="MY RESUME IS IN! I'M FREE! :D Also I finally checked my grade specifics and I got an 89 on my interview! Literally the only thing she commented on was my talkin...">
  <meta property="twitter:image" content="https://spacehey.com/img/meta_o.png">
  
  <link rel="apple-touch-icon" sizes="180x180" href="https://spacehey.com/img/favicons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="https://spacehey.com/img/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://spacehey.com/img/favicons/favicon-16x16.png">
  <link rel="mask-icon" href="https://spacehey.com/img/favicons/safari-pinned-tab.svg" color="#1D4ED8">
  <link rel="manifest" href="https://spacehey.com/img/favicons/site.webmanifest">
  <meta name="apple-mobile-web-app-title" content="SpaceHey">
  <meta name="application-name" content="SpaceHey">
  <meta name="msapplication-TileColor" content="#1D4ED8">
  <meta name="msapplication-config" content="https://spacehey.com/img/favicons/browserconfig.xml">
  <meta name="theme-color" content="#1D4ED8">

  <link href="https://spacehey.com/opensearch.xml" rel="search" title="Search SpaceHey" type="application/opensearchdescription+xml">

  <link rel="canonical" href="https://spacehey.com/bulletin?id=3030031">  
</head>
<body data-base="https://spacehey.com">
<!-- [spacehey.com] SpaceHey Server: webserver-2 -->

<div class="container">
  <nav class="">
            <div class="top">
      <div class="left">
        <a href="#">
                    <img class="logo logo-fallback" src="https://spacehey.com/img/logo.svg" alt="SpaceHey" fetchpriority="high" style="aspect-ratio: 55/14;">
        </a>
                                        
                        </div>
      <div class="center">
                              <form action="https://spacehey.com/search" role="search">
                          <label for="q">Search Users:</label>
              <div class="search-wrapper">
                <input id="q" type="text" name="q" autocomplete="off">
              </div>
              <button type="submit">Search</button>
            </form>
                        </div>
      <div class="right">
        <a href="#" rel="help">Help</a> | <form action="https://spacehey.com/logout" method="post" class="logout-form"><button class="logout-btn" type="submit" name="submit">LogOut</button></form>                    <br>
          <div class="support-right">
            <a href="#">
              Support us
            </a>
          </div>
                        </div>
    </div>
        <ul class="links">
            <li class=""><a href="#">Home</a></li>
      <li class=""><a href="#">Browse</a></li>
      <li class=""><a href="#">Search</a></li>
      <li class=""><a href="#">Messages</a></li>
      <li class=""><a href="#">Blog</a></li>
      <li class="active"><a href="#">Bulletins</a></li>
      <li class=""><a href="#">Forum</a></li>
      <li class=""><a href="#">Groups</a></li>
      <li class=""><a href="#">Layouts</a></li>
            <li class=""><a href="#">Favorites</a></li>
      <li class=""><a href="#">Invite</a></li>
      <a href="#" title="SpaceHey Mobile"><img src="https://static.spacehey.net/icons/new.png" class="icon" aria-hidden="true" loading="lazy" alt=""> App</a>
      <li><a href="#">Shop</a></li>
      <li class=""><a href="#">About</a></li>
          </ul>
    </nav>
  <main>

<div class="row article bulletin">
  <div class="col w-20 left">
    <div class="edit-info">
      <div class="profile-pic ">
        <img class="pfp-fallback" src="SpaceHeyImages/mainprofile.png" alt="96haato's profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
      </div>
      <div class="author-details">
        <h4>Bulletin by <a href="#">SpaceHey</a></h4>
        <p class="publish-date">
          posted <time class="ago" data-timestamp="1702568507" style="opacity: 1;">10 hours ago</time><br>
          expires <time class="in" data-timestamp="1703432507" style="opacity: 1;">in 10 days</time>
        </p>
        <p class="links">
          <a href="#">
            <img src="https://static.spacehey.net/icons/text_list_bullets.png" class="icon" aria-hidden="true" loading="lazy" alt="">            <span class="m-hide">View</span> Bulletins
          </a>
          <a href="#">
            <img src="https://static.spacehey.net/icons/user.png" class="icon" aria-hidden="true" loading="lazy" alt="">            <span class="m-hide">View</span> Profile
          </a>
          <a href="#" rel="nofollow">
            <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="">            Report Bulletin
          </a>
        </p>
      </div>
    </div>
  </div>
  <div class="col right">
        <h1 class="title">Title of the bulletin!</h1>
        <div class="content">
      <p>Hello there! Welcome to the bulletins page!</p>
    </div>
    <br>
    <div class="comments" id="comments">
      <div class="heading">
        <h4>Bulletin Comments</h4>
      </div>
      <div class="inner">
                <p>
          <b>
            Displaying <span class="count">3</span> of <span class="count">3</span> comments
            ( <a href="#">View all</a> | <a href="#">Add Comment</a> )
          </b>
        </p>
        <table class="comments-table" cellspacing="0" cellpadding="3" bordercolor="ffffff" border="1">
          <tbody>
                        <tr>
              <td class="">
                <a href="#">
                  <p>Nehiri</p>
                </a>
                <a href="#">
                  <img class="pfp-fallback" src="https://spacehey.com/img/default_profile_pic.png" alt="Nehiri's profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
                </a>
              </td>
              <td>
                <p><b><time class="ago" data-timestamp="1702574641" style="opacity: 1;">8 hours ago</time></b></p>
                <p>How are you gonna spend all this free time you have?</p>
                <br>
                                <p class="report">
                  <a href="#" rel="nofollow">
                    <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="">                    Report Comment
                  </a>
                </p>
                                <br><br>
                <div class="comment-replies">
                                    <div class="comment-reply">
                    <p>Design more layouts :)</p>
                    <p>
                      <small>
                        by
                        <a href="#"><b>SpaceHey</b></a>;
                        <time class="ago" data-timestamp="1702578295" style="opacity: 1;">7 hours ago</time>;
                                                <a href="#" rel="nofollow">
                          Report
                        </a>
                      </small>
                    </p>
                  </div>
                                  </div>
                                                <a href="#">
                  <button>Add Reply</button>
                </a>
                              </td>
            </tr>
                        <tr>
              <td class="">
                <a href="#">
                  <p>DonDoe404</p>
                </a>
                <a href="#">
                  <img class="pfp-fallback" src="https://spacehey.com/img/default_profile_pic.png" alt="DonDoe404's profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
                </a>
              </td>
              <td>
                <p><b><time class="ago" data-timestamp="1702570238" style="opacity: 1;">9 hours ago</time></b></p>
                <p>Hi SpaceHey<br>I'm Don</p>
                <br>
                                <p class="report">
                  <a href="#" rel="nofollow">
                    <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="">                    Report Comment
                  </a>
                </p>
                                <br><br>
                
                                                <a href="#">
                  <button>Add Reply</button>
                </a>
                              </td>
            </tr>
                        <tr>
              <td class="">
                <a href="#">
                  <p>melancholyskittle</p>
                </a>
                <a href="#">
                  <img class="pfp-fallback" src="https://spacehey.com/img/default_profile_pic.png" alt="melancholyskittle's profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
                </a>
              </td>
              <td>
                <p><b><time class="ago" data-timestamp="1702569161" style="opacity: 1;">9 hours ago</time></b></p>
                <p>DUDE Whats Up!<br>This site is rad.</p>
                <br>
                                <p class="report">
                  <a href="#" rel="nofollow">
                    <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="">                    Report Comment
                  </a>
                </p>
                                <br><br>
                
                                                <a href="#">
                  <button>Add Reply</button>
                </a>
                              </td>
            </tr>
                      </tbody>
        </table>
                      </div>
    </div>
  </div>
</div>

  </main>
  <footer>
    <p>
      brought to you by <a href="#" target="_blank" rel="noopener">tibush labs</a>
          </p>
    <p>       <i>Disclaimer: This is a fan-based project and is not affiliated with MySpace® in any way.</i>
    </p>
    <ul class="links">
            <li><a href="#">About</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Rules</a></li>
      <li><a href="#">Press</a></li>
      <li><a href="#">Brand</a></li>
      <li><a href="#">Credits</a></li>
      <li><a href="#">RSS</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Imprint</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Report Abuse</a></li>
      <li><a href="#">Status</a></li>
      <li><a href="#">SpaceHey Shop</a></li>
    </ul>
    <p class="copyright">
      <a href="#">©2023 SpaceHey.com All Rights Reserved.</a>
    </p>
  </footer>
</div>

<link rel="stylesheet" href="https://spacehey.com/css/important.css?c=994aafba76bf9205f4f293837ea21a3ecdfd1dbc4223ec4de3cac4e15c853257">


</body></html>
  
  `
  showBoxes([0,1,2,3,4,5,6,7,8,9,10,11]);
  removeBoxes([1,2,3,4,5,6,7,8,9,11]);
  document.getElementById("previewContainer").innerHTML = defaultProf;
}

function openDefaultGroup(){
  var defaultProf = `
  
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>SpaceHey | Groups | SpaceHey</title>

  <link rel="preconnect" href="https://static.spacehey.net" crossorigin="">
  <link rel="preconnect" href="https://cdn.spacehey.net" crossorigin="">

  <script src="https://spacehey.com/js/script.js?v=0.39" async=""></script>
  
  <link rel="stylesheet" href="https://spacehey.com/css/normalize.css">
  <link rel="stylesheet" href="https://spacehey.com/css/my.css?c=d2869da4874e8ee7f4690ae5ccc17e6b468309019e0e10d23a7a22dfc3fa1473">
  
  <link rel="dns-prefetch" href="https://static.spacehey.net">
  <link rel="dns-prefetch" href="https://cdn.spacehey.net">

  <link rel="shortcut icon" type="image/x-icon" href="https://spacehey.com/favicon.ico?v=2">

  <meta name="title" content="SpaceHey | Groups | SpaceHey">
  <meta name="description" content="Hello everyone — This is a Group for any kind of Feedback, Ideas or Bug Reports on SpaceHey! Please use the Group Forum for Bug Reports, Feature Ideas and Ideas...">

  <meta property="og:type" content="website">
  <meta property="og:title" content="SpaceHey | Groups | SpaceHey">
  <meta property="og:description" content="Hello everyone — This is a Group for any kind of Feedback, Ideas or Bug Reports on SpaceHey! Please use the Group Forum for Bug Reports, Feature Ideas and Ideas...">
  <meta property="og:image" content="https://external-media.spacehey.net/media/200x200,sc,sqwHVod0sVW2KgaoUt2TQpjA9CC34OH8HBZOGq2toi2Y=/https://cdn.spacehey.net/grouppics/1_68f6464ca59160f455658beecfff8d79.png?token=X9aJ3OQ8fLb5RewXG8dsU4mDv225oWu0XIBCJUSgY7I&amp;expires=1702732690">
  <meta property="og:site_name" content="SpaceHey">

  <meta property="twitter:site" content="@spacehey">
  <meta property="twitter:card" content="summary">
  <meta property="twitter:title" content="SpaceHey | Groups | SpaceHey">
  <meta property="twitter:description" content="Hello everyone — This is a Group for any kind of Feedback, Ideas or Bug Reports on SpaceHey! Please use the Group Forum for Bug Reports, Feature Ideas and Ideas...">
  <meta property="twitter:image" content="https://external-media.spacehey.net/media/200x200,sc,sqwHVod0sVW2KgaoUt2TQpjA9CC34OH8HBZOGq2toi2Y=/https://cdn.spacehey.net/grouppics/1_68f6464ca59160f455658beecfff8d79.png?token=X9aJ3OQ8fLb5RewXG8dsU4mDv225oWu0XIBCJUSgY7I&amp;expires=1702732690">
  
  <link rel="apple-touch-icon" sizes="180x180" href="https://spacehey.com/img/favicons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="https://spacehey.com/img/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://spacehey.com/img/favicons/favicon-16x16.png">
  <link rel="mask-icon" href="https://spacehey.com/img/favicons/safari-pinned-tab.svg" color="#1D4ED8">
  <link rel="manifest" href="https://spacehey.com/img/favicons/site.webmanifest">
  <meta name="apple-mobile-web-app-title" content="SpaceHey">
  <meta name="application-name" content="SpaceHey">
  <meta name="msapplication-TileColor" content="#1D4ED8">
  <meta name="msapplication-config" content="https://spacehey.com/img/favicons/browserconfig.xml">
  <meta name="theme-color" content="#1D4ED8">

  <link href="https://spacehey.com/opensearch.xml" rel="search" title="Search SpaceHey" type="application/opensearchdescription+xml">

  <link rel="canonical" href="https://groups.spacehey.com/spacehey">  
</head>
<body data-base="https://spacehey.com">
<!-- [spacehey.com] SpaceHey Server: webserver-1 -->

<div class="container">
  <nav class="">
            <div class="top">
      <div class="left">
        <a href="#">
                    <img class="logo logo-fallback" src="https://spacehey.com/img/logo.svg" alt="SpaceHey" fetchpriority="high" style="aspect-ratio: 55/14;">
        </a>
                                        
                        </div>
      <div class="center">
                              <form action="https://groups.spacehey.com/search" role="search">
              <label for="q">Search Groups:</label>
              <div class="search-wrapper">
                <input id="q" type="text" name="q" autocomplete="off">
              </div>
              <button type="submit">Search</button>
            </form>
                        </div>
      <div class="right">
        <a href="#" rel="help">Help</a> | <form action="https://spacehey.com/logout" method="post" class="logout-form"><button class="logout-btn" type="submit" name="submit">LogOut</button></form>                    <br>
          <div class="support-right">
            <a href="#">
              Support us
            </a>
          </div>
                        </div>
    </div>
        <ul class="links">
            <li class=""><a href="#">Home</a></li>
      <li class=""><a href="#">Browse</a></li>
      <li class=""><a href="#">Search</a></li>
      <li class=""><a href="#">Messages</a></li>
      <li class=""><a href="#">Blog</a></li>
      <li class=""><a href="#">Bulletins</a></li>
      <li class=""><a href="#">Forum</a></li>
      <li class="active"><a href="#">Groups</a></li>
      <li class=""><a href="#">Layouts</a></li>
            <li class=""><a href="#">Favorites</a></li>
      <li class=""><a href="#">Invite</a></li>
      <a href="#" title="SpaceHey Mobile"><img src="https://static.spacehey.net/icons/new.png" class="icon" aria-hidden="true" loading="lazy" alt=""> App</a>
      <li><a href="#">Shop</a></li>
      <li class=""><a href="#">About</a></li>
          </ul>
    </nav>
  <main>

<div class="row groups-container">
  <div class="col w-25 group-left">
    <h4>
      <a href="#">
        « SpaceHey Groups
      </a>
    </h4>
    <div class="m-row">
      <div class="m-col">
        <img class="group-pic" src="SpaceHeyImages/mainprofile.png" alt="SpaceHey group picture" loading="lazy">
      </div>
      <div class="m-col">
        <ul class="group-actions">
          <a href="#"><li>Open Bulletin Board</li></a><a href="#"><li>Open Group Forum</li></a><a href="#"><li>507 Members</li></a><a href="#"><li>2 Moderators</li></a><a href="#"><li>Leave Group</li></a>        </ul>
        <p class="report-group">
          <a href="#" rel="nofollow">
            <img src="https://static.spacehey.net/icons/flag_red.png" class="icon" aria-hidden="true" loading="lazy" alt="">            Report Group
          </a>
        </p>
      </div>
    </div>
  </div>
  <div class="col w-75 group-right">
    <h1>SpaceHey</h1>
    <p class="description"><b>Hello everyone</b> — This is a Group for any kind of Feedback, Ideas or Bug Reports on SpaceHey!
<br><br>
Please use the Group Forum for Bug Reports, Feature Ideas and Ideas for Improvements.<br>
If you want to talk about SpaceHey, write about your thoughts on a SpaceHey-related feature or there is something else, please post a Group Bulletin instead.
<br><br>
I will especially check the Group Forum regularly to look for Bug reports, answer your questions and keep you updated on the things I do. I will try to mark Bug Reports/Feature requests which are completed as "closed", so they won't clutter the Group Forum Overview and we can go back to them if needed by visiting the "Closed Topics" Section in the Group Forum.
<br><br>
If there is something you need to tell me privately, please don't hesitate to <a href="#" rel="ugc">send me an IM</a> or Email (See "Contact SpaceHey" Link in the Footer). Thank you!

<style>
img.group-pic{
  border-radius: 4px;
}
div.col:nth-child(2) > h3:nth-child(5):after{
  content: " — Talking about SpaceHey, Thoughts, ...";
  color: var(--dark-gray);
  font-size: 0.9em;
}
div.col:nth-child(2) > h3:nth-child(12):after{
  content: " — Bug Reports, Ideas, Improvements";
  color: var(--dark-gray);
  font-size: 0.9em;
}
</style></p>
    <br><br>

        <h3>Group Bulletin Board</h3>
    <a href="#" class="rss-right" title="Open Group Bulletin Board"><img src="https://static.spacehey.net/icons/arrow_right.png" class="icon" aria-hidden="true" loading="lazy" alt=""></a>
    <table class="bulletin-table">
      <thead>
        <tr>
          <th scope="col">From</th>
          <th scope="col">Time</th>
          <th scope="col">Subject</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
            </tbody>
    </table>
    <p><i>No Group Bulletins found — <a href="#">Post a new Bulletin</a></i></p><br><br>
        <h3>Group Forum</h3>
    <a href="#" class="rss-right" title="Open Group Forum"><img src="https://static.spacehey.net/icons/arrow_right.png" class="icon" aria-hidden="true" loading="lazy" alt=""></a>
    <table class="forum-table">
      <thead>
        <tr>
          <th>Author</th>
          <th>Subject</th>
          <th>Replies</th>
          <th>Last Post</th>
        </tr>
      </thead>
      <tbody>
              <tr class="">
          <td class="user-info ">
            <a href="#">
              <img class="profile-pic pfp-fallback" src="https://spacehey.com/img/default_profile_pic.png" alt="Lennox's profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
            </a>
          </td>
          <td class="subject">
                        <a href="#">
              <b>Spacehey Desktop client?? </b>
            </a>
          </td>
          <td class="reply-count">
            <big>0</big>
          </td>
          <td>
            <time class="ago" data-timestamp="1702268936" style="opacity: 1;">5 days ago</time>
          </td>
        </tr>
                <tr class="">
          <td class="user-info ">
            <a href="#">
              <img class="profile-pic pfp-fallback" src="https://spacehey.com/img/default_profile_pic.png" alt="Cranky Old Witch's profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
            </a>
          </td>
          <td class="subject">
                        <a href="#">
              <b>Request for a "History" category</b>
            </a>
          </td>
          <td class="reply-count">
            <big>0</big>
          </td>
          <td>
            <time class="ago" data-timestamp="1702151704" style="opacity: 1;">6 days ago</time>
          </td>
        </tr>
                <tr class="">
          <td class="user-info ">
            <a href="#">
              <img class="profile-pic pfp-fallback" src="https://spacehey.com/img/default_profile_pic.png" alt="▄︻╦̵̵̿═SniperLife═'s profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
            </a>
          </td>
          <td class="subject">
                        <a href="#">
              <b>Feature request custom cc/html on our own home page</b>
            </a>
          </td>
          <td class="reply-count">
            <big>0</big>
          </td>
          <td>
            <time class="ago" data-timestamp="1702042208" style="opacity: 1;">1 week ago</time>
          </td>
        </tr>
                <tr class="">
          <td class="user-info ">
            <a href="#">
              <img class="profile-pic pfp-fallback" src="https://spacehey.com/img/default_profile_pic.png" alt="♡Niko!♡'s profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
            </a>
          </td>
          <td class="subject">
                        <a href="#">
              <b>suggestion for advent calendar!!</b>
            </a>
          </td>
          <td class="reply-count">
            <big>0</big>
          </td>
          <td>
            <time class="ago" data-timestamp="1701986184" style="opacity: 1;">8 days ago</time>
          </td>
        </tr>
                <tr class="">
          <td class="user-info ">
            <a href="#">
              <img class="profile-pic pfp-fallback" src="https://spacehey.com/img/default_profile_pic.png" alt="Stamps The Creepypasta fa...'s profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
            </a>
          </td>
          <td class="subject">
                        <a href="#">
              <b>Suggestion for advent calendrer </b>
            </a>
          </td>
          <td class="reply-count">
            <big>0</big>
          </td>
          <td>
            <time class="ago" data-timestamp="1701725374" style="opacity: 1;">11 days ago</time>
          </td>
        </tr>
                <tr class="">
          <td class="user-info ">
            <a href="#">
              <img class="profile-pic pfp-fallback" src="https://spacehey.com/img/default_profile_pic.png" alt="Cranky Old Witch's profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
            </a>
          </td>
          <td class="subject">
                        <a href="#">
              <b>Suggestions for forums</b>
            </a>
          </td>
          <td class="reply-count">
            <big>1</big>
          </td>
          <td>
            <time class="ago" data-timestamp="1701740313" style="opacity: 1;">11 days ago</time>
          </td>
        </tr>
                <tr class="">
          <td class="user-info ">
            <a href="#">
              <img class="profile-pic pfp-fallback" src="https://spacehey.com/img/default_profile_pic.png" alt="▄︻╦̵̵̿═SniperLife═'s profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
            </a>
          </td>
          <td class="subject">
                        <a href="#">
              <b>feature request: edit bullitens, both title and contents</b>
            </a>
          </td>
          <td class="reply-count">
            <big>0</big>
          </td>
          <td>
            <time class="ago" data-timestamp="1701204941" style="opacity: 1;">17 days ago</time>
          </td>
        </tr>
                <tr class="">
          <td class="user-info ">
            <a href="#">
              <img class="profile-pic pfp-fallback" src="https://spacehey.com/img/default_profile_pic.png" alt="▄︻╦̵̵̿═SniperLife═'s profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
            </a>
          </td>
          <td class="subject">
                        <a href="#">
              <b>feature request: Security key support</b>
            </a>
          </td>
          <td class="reply-count">
            <big>0</big>
          </td>
          <td>
            <time class="ago" data-timestamp="1701194107" style="opacity: 1;">17 days ago</time>
          </td>
        </tr>
                <tr class="">
          <td class="user-info ">
            <a href="#">
              <img class="profile-pic pfp-fallback" src="https://spacehey.com/img/default_profile_pic.png" alt="▄︻╦̵̵̿═SniperLife═'s profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
            </a>
          </td>
          <td class="subject">
                        <a href="#">
              <b>Mobile app </b>
            </a>
          </td>
          <td class="reply-count">
            <big>2</big>
          </td>
          <td>
            <time class="ago" data-timestamp="1701490050" style="opacity: 1;">2 weeks ago</time>
          </td>
        </tr>
                <tr class="">
          <td class="user-info ">
            <a href="#">
              <img class="profile-pic pfp-fallback" src="https://spacehey.com/img/default_profile_pic.png" alt="Cynder's profile picture" loading="lazy" style="aspect-ratio: 1 / 1;">
            </a>
          </td>
          <td class="subject">
                        <a href="#">
              <b>How????</b>
            </a>
          </td>
          <td class="reply-count">
            <big>0</big>
          </td>
          <td>
            <time class="ago" data-timestamp="1699306256" style="opacity: 1;">1 month ago</time>
          </td>
        </tr>
              </tbody>
    </table>
    <br><a href="#"><button>Open Group Forum</button></a>  </div>
</div>

  </main>
  <footer>
    <p>
      brought to you by <a href="#" target="_blank" rel="noopener">tibush labs</a>
          </p>
    <p>       <i>Disclaimer: This is a fan-based project and is not affiliated with MySpace® in any way.</i>
    </p>
    <ul class="links">
            <li><a href="#">About</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Rules</a></li>
      <li><a href="#">Press</a></li>
      <li><a href="#">Brand</a></li>
      <li><a href="#">Credits</a></li>
      <li><a href="#">RSS</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Imprint</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Report Abuse</a></li>
      <li><a href="#">Status</a></li>
      <li><a href="#">SpaceHey Shop</a></li>
    </ul>
    <p class="copyright">
      <a href="#">©2023 SpaceHey.com All Rights Reserved.</a>
    </p>
  </footer>
</div>

<link rel="stylesheet" href="https://spacehey.com/css/important.css?c=994aafba76bf9205f4f293837ea21a3ecdfd1dbc4223ec4de3cac4e15c853257">


</body>

  `;

  showBoxes([0,1,2,3,4,5,6,7,8,9,10,11]);
  removeBoxes([1,2,3,4,5,6,7,8,9,10]);
  document.getElementById("previewContainer").innerHTML = defaultProf;
}
/*
function getCookie(name) {
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      
      // Check if this is the cookie we're looking for
      if (cookie.startsWith(name + '=')) {
          return decodeURIComponent(cookie.substring(name.length + 1));
      }
  }

  // Return null if the cookie is not found
  return null;
}
*/
function retrieveString() {
  // Retrieve the string from session storage
  var storedString = JSON.parse(sessionStorage.getItem('profileData'));
  return storedString;
}


document.getElementById('designOption').addEventListener('change', function() {
  var selectedValue = this.value;

  if (selectedValue === 'Profile') {
    openDefaultProfile();
  } else if (selectedValue === 'Blog') {
    openDefaultBlog();
  } else if (selectedValue === 'Bulletin') {
    openDefaultBulletin();
  } else if (selectedValue === 'Group'){
    openDefaultGroup();
  }
});

function removeBoxes(elArr){
  var boxWrapper = document.getElementById("editorContainer");

  elArr.forEach(
    function(el){
      boxWrapper.getElementsByTagName("h1")[el].style.display = "none";
      var cm = $('.CodeMirror')[el].CodeMirror;
      $(cm.getWrapperElement()).hide();

      //boxWrapper.getElementsByClassName("CodeMirror cm-s-abcdef CodeMirror-wrap")[el].style.display = "none";
    }
  );
}

function showBoxes(elArr){
  var boxWrapper = document.getElementById("editorContainer");

  elArr.forEach(
    function(el){
      boxWrapper.getElementsByTagName("h1")[el].style.display = "block";
      var cm = $('.CodeMirror')[el].CodeMirror;
      $(cm.getWrapperElement()).show();
      //boxWrapper.getElementsByClassName("CodeMirror cm-s-abcdef CodeMirror-wrap")[el].style.display = "block";
    }
  );
}


window.onload = function(){ 
  sizeBoxes();
  var cm = $('.CodeMirror')[8].CodeMirror;
  $(cm.getWrapperElement()).hide();
  var cm = $('.CodeMirror')[9].CodeMirror;
  $(cm.getWrapperElement()).hide();
  var cm = $('.CodeMirror')[10].CodeMirror;
  $(cm.getWrapperElement()).hide();




  //Assign all the flexLink class elements to an array
var coll = document.getElementsByClassName("flexLink");

//Assign all the previewCard class elements to an array
var previewcoll = document.getElementsByClassName("previewCard");

var i;
//cycle through each flexLink element and add an event
//listener that does stuff when mouseover occurs
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mouseover", function() {
    this.classList.toggle("active");
    //Get the boundaries of the hovered element
    var elementRect = this.getBoundingClientRect();
    var cbottom = elementRect.bottom;
    var cleft = elementRect.left;
    var ctop = elementRect.top;
    var cright = elementRect.right;
    var cwidth = elementRect.width
    var curElementID = this.id;
    var z;
    //When hovered, cycle through the previewCard class and modify the
    //position, height, and width
    for (z = 0; z < previewcoll.length; z++){
      //Compare ID tags to select the correct card to load.
      if (previewcoll[z].id == curElementID.replace("flex","preview")){
        var cardRect = previewcoll[z];
        cardRect.style.height = "auto";
        cardRect.style.width = "400px";
        cardRect.style.maxWidth = "600px";
        cardRect.style.maxHeight = "150px";
        //When at the top half of the screen place the card below the link,
        //when in the bottom half place the card above the link.
        if (event.clientY < window.innerHeight/2){
          cardRect.style.top = cbottom - 3 + "px";
        } else if (event.clientY > window.innerHeight/2){
          cardRect.style.top = ctop - cardRect.getBoundingClientRect().height + 3 + "px";
        }
        
        //When in the left half of the screen place the card to the right of the link,
        //when in the right half place the card to the left of the link.
        if (event.clientX < window.innerWidth/2){
          cardRect.style.left = cleft + "px";
        } else if (event.clientX > window.innerWidth/2){
          cardRect.style.left = cleft - cardRect.getBoundingClientRect().width + cwidth + "px";
        }
        cardRect.style.zIndex = "15";
      }
    }
  });
}
//Add a second event listener to each flexLink element which sets the
//width and height to 0 and the position of the element off screen
//when the mouse is moved off of the link.
for (i = 0; i < coll.length; i++) {
  currentSelectedClass = coll[i];
  coll[i].addEventListener("mouseout", function() {
    this.classList.toggle("active");
    var elementRect = this.getBoundingClientRect();
    var cbottom = elementRect.bottom;
    var cleft = elementRect.left;
    var curElementID = this.id;
    var z;
    for (z = 0; z < previewcoll.length; z++){
      if (previewcoll[z].id == curElementID.replace("flex","preview")){
        var cardRect = previewcoll[z];
        cardRect.style.top = "-9999px";
        cardRect.style.left = "-9999px";
        cardRect.style.height = "0";
        cardRect.style.width = "0";
        cardRect.style.zIndex = "-5";
      }
    }
  });
}

for (i = 0; i < previewcoll.length; i++) {
  previewcoll[i].addEventListener("mouseover", function() {
    this.classList.toggle("active");
    var z;
    for (z = 0; z < coll.length; z++){
      if (coll[z].id == this.id.replace("preview","flex")){
          var elementRect = coll[z].getBoundingClientRect();
          var cbottom = elementRect.bottom;
          var cleft = elementRect.left;
          var ctop = elementRect.top;
          var cright = elementRect.right;
          var cwidth = elementRect.width
          var curElementID = coll[z].id;
          var cardRect = this;
          cardRect.style.height = "auto";
          cardRect.style.width = "400px";
          cardRect.style.maxWidth = "600px";
          cardRect.style.maxHeight = "150px";
          //When at the top half of the screen place the card below the link,
          //when in the bottom half place the card above the link.
          if (event.clientY < window.innerHeight/2){
            cardRect.style.top = cbottom - 3 + "px";
          } else if (event.clientY > window.innerHeight/2){
            cardRect.style.top = ctop - cardRect.getBoundingClientRect().height + 3 + "px";
          }

          //When in the left half of the screen place the card to the right of the link,
          //when in the right half place the card to the left of the link.
          if (event.clientX < window.innerWidth/2){
            cardRect.style.left = cleft + "px";
          } else if (event.clientX > window.innerWidth/2){
            cardRect.style.left = cleft - cardRect.getBoundingClientRect().width + cwidth + "px";
          }
          cardRect.style.zIndex="15";
        }
      }
  });
}

for (i = 0; i < previewcoll.length; i++) {
  previewcoll[i].addEventListener("mouseout", function() {
    this.classList.toggle("active");
    var z;
    for (z = 0; z < coll.length; z++){
      if (coll[z].id == this.id.replace("preview","flex")){
          var elementRect = coll[z].getBoundingClientRect();
          var cbottom = elementRect.bottom;
          var cleft = elementRect.left;
          var ctop = elementRect.top;
          var cright = elementRect.right;
          var cwidth = elementRect.width
          var curElementID = coll[z].id;
          var cardRect = this;
          cardRect.style.height = "0";
          cardRect.style.width = "0";
          cardRect.style.maxWidth = "0";
          cardRect.style.maxHeight = "0";
          cardRect.style.top = "-9999px";
          cardRect.style.left = "-9999px";
          cardRect.style.zIndex = "-5";
      }
    }
  });
}
}
