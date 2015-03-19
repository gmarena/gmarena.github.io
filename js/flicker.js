if (window.innerWidth > 1000) {

document.getElementById('famous').style.opacity=0;
document.getElementById('subtitle').style.opacity=0;
var famous = $('#famous'),
    subtitle = $('#subtitle'),
    f = 25,
    s = 200;

famous.delay(1500)
    .fadeTo(1000, 0.4)
    .fadeTo(f, 1)
    .delay(s)
    .fadeOut(f, function() {
        subtitle.fadeTo(750, 1);
    })
    .fadeIn(f)
    .fadeTo(f, 0)
    .delay(f)
    .fadeTo(f, 1);
}