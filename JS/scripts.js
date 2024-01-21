document.addEventListener("DOMContentLoaded", function () {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var nav = document.querySelector(".nav");
  var navResponsive = document.querySelector(".nav-responsive");

  navResponsive.addEventListener('click', () => {
    nav.classList.toggle('barra-lateral');
  });
  document.addEventListener('scroll', () => {
    if (screenWidth) {
      navResponsive.style.transform = "translateY(" + window.scrollY + "px";
      nav.style.transform = "translateY(" + window.scrollY + "px";
    }
  });
  
  var smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
  smoothScrollLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      var targetId = link.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      // Realiza el desplazamiento suave
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  var project = document.querySelectorAll('.project');
  project[0].addEventListener('click', () => {
    window.location = 'https://www.youtube.com/watch?v=8S8B8EfOBBI';
  }); 
  project[1].addEventListener('click', () => {
    window.location = 'https://www.youtube.com/watch?v=LzlC3C8273I';
  }); 
  project[2].addEventListener('click', () => {
    window.location = 'https://www.youtube.com/watch?v=8ZDEyjitX0I';
  }); 
});








