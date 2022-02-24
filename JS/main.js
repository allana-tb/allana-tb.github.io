

tsParticles.loadJSON('particles-js', 'JS/particles.json').then(function(p) {
    // p is the loaded container, for using it later
    console.log('callback - particles.js config loaded');
  });
  
  var p = tsParticles.load('particles-js', { 
    fpsLimit: 65,
    particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            area: 800
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
            nbSides: 5
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
            sync: false
          }
        },
        size: {
          value: 15,
          random: true,
          animation: {
            enable: false,
            speed: 26.79854800594439,
            sizeMin: 0.5,
            sync: false
          }
        },
        lineLinked: {
          enable: true,
          distance: 100,
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
          outMode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        },
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          onClick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab:{
            distance: 400,
            lineLinked:{
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
            quantity: 4
          },
          remove:{
            quantity: 2
          }
        },
        mouse:{}
      },
      detectsRetina: true,
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