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
    let anchor = document.querySelectorAll("#MID a")
let background = document.querySelector("#navbar #background")
console.log(anchor)
anchor.forEach(function(elem,index){
    if (index==0){
        elem.addEventListener("mouseover",function(elem){
         gsap.to(background,{
              x:"667px",
            duration:1,
            opacity:1
         })
    
        
        })
    }
    else if(index==1){
        elem.addEventListener("mouseover",function(elem){
            gsap.to(background,{
                x:"740px",
              duration:1,
              opacity:1
           })
        })
    }
    else if(index==2){
        elem.addEventListener("mouseover",function(elem){
            gsap.to(background,{
                x:"813px",
              duration:1,
              opacity:1
           })
    
        })
    }
    else if(index==3){
        elem.addEventListener("mouseover",function(elem){
            gsap.to(background,{
                x:"899px",
              duration:1,
              opacity:1
           })
    
        })
    }
    elem.addEventListener("mouseout",function(elem){
        gsap.to(background,{
            x:"-100%",
          duration:1,
          opacity:0
       })
    })
})
}
hoveranimationinnav();
