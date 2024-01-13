 document.addEventListener("DOMContentLoaded", function() {
     var overlayElement = document.querySelector(".overlay");
     var animationElement = document.querySelector(".animacion-mxtu");
     var audioElement = document.getElementById("audio-animacion");
     var headerElement = document.querySelector(".bg-header");
     var sectionElement = document.querySelector(".sobreMi");
  
      overlayElement.classList.add("animado");
      animationElement.classList.add("animado");
  
      audioElement.play();
  
     setTimeout(function() {
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
