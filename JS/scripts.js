document.addEventListener("DOMContentLoaded", function () {
  var overlayElement = document.querySelector(".overlay");
  var animationElement = document.querySelector(".animacion-mxtu");
  var audioElement = document.getElementById("audio-animacion");
  var headerElement = document.querySelector(".bg-header");
  var sectionElement = document.querySelector(".sobreMi");

  overlayElement.classList.add("animado");
  animationElement.classList.add("animado");

  audioElement.play();

  setTimeout(function () {
    overlayElement.classList.remove("animado");
    animationElement.classList.remove("animado");
    overlayElement.classList.add("removeOverlay")
    audioElement.pause();
    headerElement.style.visibility = "visible";
    sectionElement.style.visibility = "visible";
  }, 2000);
});



// LIBRERÍA HOWLER
var sound = new Howl({
  src: ['audios/Intro_Mxtu.wav']
});

sound.play();

sound.fade(0, 1, 1000);  //Aumenta el volumen de 0 a 1 en 1 segundo (1000 milisegundos)



// --------------------------------------------------------------------------------------------------------------
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
        // Si el menú está abierto, ciérralo
        if (isNavOpen) {
          nav.style.transform = "translateX(-100%)";
          isNavOpen = false;
          // Restaurar el scroll de la página
          document.body.style.overflow = "auto";
        }
      }
    });
  });
});








