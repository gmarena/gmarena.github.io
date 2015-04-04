if (window.innerWidth > 1000) {


var splash = document.getElementById("splash"),
    img = "url('portfolio/img/bckgrnd.jpg')",
    f = 45,
    s = 200,
    xs = 400;

document.getElementById('famous').style.opacity=0;
document.getElementById('subtitle').style.opacity=0;
splash.style.backgroundImage = "none";
    // initially hide the titles
$('#famous').delay(1500)
    .fadeTo(1000, 0.4)
    .fadeTo(f, 1, function() {
        splash.style.backgroundImage = img;
    })
    .delay(s)
    .fadeTo(f, 0, function() {
        $('#subtitle').fadeTo(1000, 1);
        splash.style.backgroundImage = "none";
    })
    .fadeTo(f, 1, function() {
        splash.style.backgroundImage = img;
    })
    .fadeTo(f, 0, function() {
        splash.style.backgroundImage = "none";
    })
    .fadeTo(f, 1)
    .fadeTo(f, 0)
    .fadeTo(f, 1, function() {
        splash.style.backgroundImage = img;
    })
    .fadeTo(f, 0, function() {
        splash.style.backgroundImage = "none";
    })
    .delay(xs)
    .fadeTo(f, 1, function() {
        splash.style.backgroundImage = img;
    })
    .fadeTo(f, 0, function() {
        splash.style.backgroundImage = "none";
    })
    .fadeTo(f, 1, function() {
        splash.style.backgroundImage = img;
    });
    // Fluorescent light flicker and subtitle fade
}