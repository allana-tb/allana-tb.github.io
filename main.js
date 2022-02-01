
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