
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

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'JS/particles.json', function() {
    console.log('callback - particles.js config loaded');
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