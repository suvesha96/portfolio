'use strict';

let header = $(`
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
<a class="navbar-brand" href="index.html">Suvesha Chandrasekaran </a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
   <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
   <li class="nav-item"><a class="nav-link" href="experience.html">Experience</a></li>
   <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
   <li class="nav-item"><a class="nav-link" href="education.html">Education</a></li>
  </ul>
</div>
</nav>`);

let footer = $(`
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@500&family=Hanalei&family=Roboto:ital,wght@0,400;1,900&family=Titillium+Web:wght@300;400&display=swap" rel="stylesheet">
  <footer class="footer">
    <div class="container p-4">
      <div class="row">

          <p class="tag" id="info" style=" font-family: 'Dosis', sans-serif; font-size:20px;" >
          <img src="./assets/images/phone.png" width="30" height="30"> (360) 228-4104<br><br>
          <img src="./assets/images/mail.png" width="30" height="30""> suvesha96@gmail.com
          </p>

            <div class="rounded-social-buttons tag style="position:relative top:100px;">
              <a class="social-button linkedin" href="https://www.linkedin.com/in/suvesha-c/" target="_blank"><i class="fab fa-linkedin"></i></a>
              <a class="social-button envelope" href="mailto:suvesha96@gmail.com" title="suvesha96@gmail.com" target="_blank"><i class="fa fa-envelope-o"></i></a>
            </div>
        </div>
      </div>
    </div>
  </footer>
`);


// Window Loads
$(function () {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);

//toggler hamburger functions
    const menuBtn = document.querySelector('.navbar-toggler');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen){
        menuBtn.classList.add('open')
        menuOpen = true;
      }
      else{
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
  });

});

// function for toggling hamburger is-active class
$(function(){

  $("#js-hamburger").on("click", function(){
    $(this).toggleClass('is-active');
  });

});
