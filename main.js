
///////HOME
// Scrolling effect, transitioning from full screen and resizing
window.onscroll = function() {scrollfunction()};

 function scrollfunction() {
     if (document.body.scrollTop >= 250 ||
        document.socumentElement.scrollTop >= 250) {
            document.getElementById("home").style.fontSize = "90px";
        } else {
            document.getElementById("home").style.fontSize = "45px";
            document.getElementById("home").style.display = "flex";
            document.getElementById("home").style.flex = "50%";
            removeClass('home__subtitle');
        }
 }