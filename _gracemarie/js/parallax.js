var splash = document.getElementById("splash"),
    famous = document.getElementById("famous"),
    subtitle = document.getElementById("subtitle"),
    slow = 5,
    fast = 2,
    fadeSpeed = 250,
    y,
    // Applies a 25% movement in the OPPOSITE direction to the scroll so as to simulate slow movement up the page.
        // inverted it will speed up the movement up of an element by 4
    supportPageOffset = window.pageXOffset !== undefined,
        // true or false, browser does not have property .pageXOffset
        // if false (and property is undefined then the browser is probably ie8)
    isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        // true or false, the document is rendered in "Standards mode"
        // if false (and is "BackCompat"), document is rendered in Quirks mode and is probably old.
if (window.innerWidth > 1000) {
    // Big screens only pls
    window.onscroll = function(y) { 
        y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
            // Use pageYOffset rather than ScrollY (anyway) for maximum compatibility
        splash.style.backgroundPosition = "center " + (y/slow) + "px";
        splash.style.opacity = 1 - y/fadeSpeed;

        famous.style.transform = "translate(0px," + (y / -slow) + "px)";
        subtitle.style.transform = "translate(0px," + (y / -slow) + "px)";
    }
}
