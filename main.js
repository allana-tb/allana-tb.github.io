
 function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});


particlesJS("particles", {
    "particles":{
        "number":{
            "value":85,
            "density":{
                "enable":true,
                "value_area":710.2328774690454
            }
        },
        "color":{
            "value":"#fffade"
        },
        "shape":{
            "type":"circle",
            "stroke":{
                "width":0,
                "color":"#000000"
            },
            "polygon":{
                "nb_sides":5
            },
            "image":{
                "src":"img/github.svg",
                "width":100,
                "height":100
            }
        },
        "opacity":{
            "value":0.5,
            "random":false,
            "anim":{
                "enable":true,
                "speed":1,
                "opacity_min":0.1,
                "sync":false
            }
        },
        "size":{
            "value":12.02559045649142,
            "random":true,
            "anim":{
                "enable":false,
                "speed":26.79854800594439,
                "size_min":0.1,
                "sync":false
            }
        },
        "line_linked":{
            "enable":true,
            "distance":150,
            "color":"#beb7d1",
            "opacity":0.4,
            "width":1
        },
        "move":{
            "enable":true,
            "speed":6,
            "direction":"none",
            "random":false,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract":{
                "enable":true,
                "rotateX":600,
                "rotateY":1200
            }
        }
    },
    "interactivity":{
        "detect_on":"canvas",
        "events":{
            "onhover":{
                "enable":true,
                "mode":"repulse"
            },
            "onclick":{
                "enable":true,
                "mode":"push"
            },
            "resize":true
        },
        "modes":{
            "grab":{
                "distance":400,
                "line_linked":{
                    "opacity":1
                }
            },
            "bubble":{
                "distance":400,
                "size":40,
                "duration":2,
                "opacity":8,
                "speed":3
            },
            "repulse":{
                "distance":105.57003759917487,
                "duration":0.4
            },
            "push":{
                "particles_nb":4
            },
            "remove":{
                "particles_nb":2
            }
        }
    },
    "retina_detect":true
});
var count_particles, stats, update; stats = new Stats;
 stats.setMode(0);
  stats.domElement.style.position = 'absolute';
   stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
     document.body.appendChild(stats.domElement);
      count_particles = document.querySelector('.js-count-particles');
       update = function() {
            stats.begin();
             stats.end();
              if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                   count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
                } 
                requestAnimationFrame(update); 
            };
             requestAnimationFrame(update);;



 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.timeline').offset().top }, 'slow');
      return false;
    });
  });

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