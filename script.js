function lenis(){
    // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
}
lenis();
function hoveranimationinnav(){
    let anchor = document.querySelectorAll("#MID a");
    let background = document.querySelector("#navbar #background");

    anchor.forEach((elem) => {
        elem.addEventListener("mouseover", function() {
            gsap.to(background, {
                x: elem.getBoundingClientRect().left + "px",
                width: elem.getBoundingClientRect().width + "px",
                duration: 0.5,
                opacity: 1
            });
        });

        elem.addEventListener("mouseout", function() {
            gsap.to(background, {
                x:0,
                opacity: 0,
                duration: 0.5
            });
        });
    });
}
hoveranimationinnav();