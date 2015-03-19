var splash = document.getElementById("splash"),
    fold = document.getElementById("fold"),
    speed = 5,
    y,
    // Applies a 25% movement in the OPPOSITE direction to the scroll so as to simulate slow movement up the page.
        // inverted it will speed up the movement up of an element by 4
    supportPageOffset = window.pageXOffset !== undefined,
        // true or false, browser does not have property .pageXOffset
        // if false (and property is undefined then the browser is probably ie8)
    isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        // true or false, the document is rendered in "Standards mode"
        // if false (and is "BackCompat"), document is rendered in Quirks mode and is probably old.
window.onscroll = function(y) { 
    y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        // Use pageYOffset rather than ScrollY (anyway) for maximum compatibility
    splash.style.backgroundPosition = "0px " + (y / speed) + "px";
    fold.style.transform = "translate(0px," + (y / -speed) + "px)";
}