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
function preloader(){
    document.addEventListener("DOMContentLoaded", function () {
        const images = document.querySelectorAll("img");
        const videos = document.querySelectorAll("video source");
        let loadedItems = 0;
        const totalItems = images.length + videos.length;

        function checkLoaded() {
            loadedItems++;
            if (loadedItems === totalItems) {
                document.body.style.display = "block"; // Show content after all are loaded
            }
        }

        // Preload Images
        images.forEach(img => {
            const tempImg = new Image();
            tempImg.src = img.src;
            tempImg.onload = checkLoaded;
        });

        // Preload Videos
        videos.forEach(video => {
            const tempVideo = document.createElement("video");
            tempVideo.src = video.src;
            tempVideo.preload = "auto";
            tempVideo.oncanplaythrough = checkLoaded;
        });
    });
}
preloader();
function hoveranimationinnav(){
    let anchor = document.querySelectorAll("#MID a");
    let background = document.querySelector("#navbar #background");
    let mid = document.querySelector("#MID");

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
                opacity: 0,
                duration: 0.5
            });
        });
mid.addEventListener("mouseleave",function(){
    gsap.to(background, {
        x:0,
        opacity: 0,
        duration: 0.5
})
})
    });
}
hoveranimationinnav();
function landingpagetext(){
let span = document.querySelector("#content-container h1 span");
let textarray = ["WEB-DEVELOPER","UI/UX DESIGNER","FRONT-END DEVELOPER"];
setInterval(function() {
    let index = Math.floor(Math.random()*3);
    span.innerHTML = textarray[index];
}, 1000);

}
landingpagetext();
function videochange(){
    let next = document.querySelector("#next")
    let prev = document.querySelector("#prev")
    let cards = document.querySelectorAll(".card")
    let counter = 0;
    cards.forEach((card,index) => {
        card.style.left = `${index*100}%`;
    })
    setInterval(function(){
        counter++
        slider()
    },5000)
   next.addEventListener("click",function(){
    counter++
    if(counter == cards.length){
        counter = 0;
    }
    slider()
   })
   prev.addEventListener("click",function(){
    counter--
    if(counter < 0){
        counter = cards.length - 1;
    }
    slider()
   })
   function slider(){
    cards.forEach((card) => {
    card.style.transform = `translateX(-${counter*100}%)`;
   })
}}
videochange();
