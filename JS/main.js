
 function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

//= require particles

tsParticles.loadJSON('particles-js', 'JS/particles.json').then(function(p) {
    // p is the loaded container, for using it later
    console.log('callback - particles.js config loaded');
  });
  
  var p = tsParticles.load('particles-js', { 
    fpsLimit: 60,
    particles: {
        number: {
          value: 85,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#fffade'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: '',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 12.02559045649142,
          random: true,
          anim: {
            enable: false,
            speed: 26.79854800594439,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#beb7d1',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab:{
            distance: 400,
            line_linked:{
              opacity: 1
            }
          },
          bubble:{
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse:{
            distance: 105,
            duration: 0.4
          },
          push:{
            particles_nb: 4
          },
          remove:{
            particles_nb: 2
          }
        },
        mouse:{}
      },
      retina_detect: true,
  }); // p is the loaded container, for using it later


  var coll = document.getElementsByClassName("collapsible");
  var i;
  
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }