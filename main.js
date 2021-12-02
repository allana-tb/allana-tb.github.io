
///////HOME
// Scrolling effect, transitioning from full screen and resizing
window.onscroll = function() {scrollfunction()};

 function scrollfunction() {
     if (document.body.scrollTop > 50 ||
        document.socumentElement.scrollTop > 50) {
            document.getElementById("home").style.fontSize = "45px";
            document.getElementById("home").style.display = "flex";
            document.getElementById("home").style.flex = "50%";
        } else {
            document.getElementById("home").style.fontSize = "90px";
        }
 }