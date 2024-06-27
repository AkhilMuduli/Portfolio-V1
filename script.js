// ******GSAP + LOCOMOTIVE********//
function init(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".wrapper"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".wrapper", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
init()

// ********HORIZONTAL SLIDE ON SCROLL**********//


let mm = gsap.matchMedia();

mm.add("(min-width: 1200px)", () => {

  var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:".wrapper .page1",
        scroller:'.wrapper',
        start: 'top top',                   //animation starts jab trigger(page1) ka top scroller(.wrapper) ke top mai hai                  
        end:'bottom -200%',                   //animation ends jab trigger(page1) ka bottom scroller(.wrapper) ke top mai pohonch gaya
        pin:true,                            // pin trigger ko hota hai matlab in this case page1 pinned hai
        scrub:2,
        ease:'none'                              // scrub matlab animation smoothness
  
    }
  })
  tl1.to('.wrapper .page1 .panel',{
    xPercent:-200,
  })

});

// var tl2 = gsap.timeline({
//   scrollTrigger:{
//       trigger:".page3 ",
//       scroller:'.wrapper',
//       start: 'top 0%',                   //animation starts jab trigger(page1) ka top scroller(.wrapper) ke top mai hai                  
//       end:'bottom -200%',                   //animation ends jab trigger(page1) ka bottom scroller(.wrapper) ke top mai pohonch gaya
//       pin:true,                            // pin trigger ko hota hai matlab in this case page1 pinned hai
//       scrub:3,
//       ease:'back.out'  ,                            // scrub matlab animation smoothness
//   }
// })
// tl2.to('.page3 .flex .r_scroll',{
//   yPercent:-220,
// })


// mouse follower
document.addEventListener('mousemove', (dets)=>{
  document.getElementsByName('mowse_folower').style.display = 'none'
  gsap.to('.mowse_folower',{
    x:dets.x - 10,
    y:dets.y - 10,
    duration:0.3
} )
});



//************DONUT BAR************//
const bars = document.querySelectorAll('.bar');
bars.forEach((bar, index) => {
  const percentages = [90, 70, 60, 70];
  const percentage = percentages[index]; 
  const rotation = (360/100)*percentage;
  bar.style.transform = `rotate(${rotation}deg)`;
});

//**********SHERY JS**************//
Shery.mouseFollower();
Shery.makeMagnet(".centre_nav .menulinks", {
  duration: .5,
});
// Shery.makeMagnet(".bot_cont img" , {
//   duration: .5,

// });
Shery.makeMagnet(".right_nav i" , {
  duration: .5,
});
Shery.makeMagnet(".right_nav h4" , {
  duration: .5,
});
Shery.makeMagnet(".left_nav h4" , {
  duration: .5,
});

Shery.hoverWithMediaCircle(".top_main p" /* Element to target.*/, {
  videos: [ ""],
});





//  typewritter effect
var wordsToType = document.querySelector("span[words]").getAttribute("words").split(','), 
            typer =  document.querySelector("span[words]"), 
            typingSpeed = (parseInt(typer.getAttribute('typing-speed')) || 70), 
            typingDelay = (parseInt(typer.getAttribute('typing-delay')) || 700);
    
var currentWordIndex = 0, currentCharacterIndex = 0; 

function type(){

    var wordToType = wordsToType[currentWordIndex%wordsToType.length];

    if(currentCharacterIndex < wordToType.length){
        typer.innerHTML += wordToType[currentCharacterIndex++];
        setTimeout(type, typingSpeed);
    }else{

        setTimeout(erase, typingDelay);
    }

}
function erase(){
    var wordToType = wordsToType[currentWordIndex%wordsToType.length]; 
    if(currentCharacterIndex >0){
        typer.innerHTML = wordToType.substr(0, --currentCharacterIndex -1);
        setTimeout(erase, typingSpeed);
    }else{

        currentWordIndex++; 
        setTimeout(type, typingDelay);
    }

}
window.onload = function(){
    type(); 
}












function initMap() {
  const bhubaneswar = { lat: 20.2961, lng: 85.8245 }; // Coordinates for Bhubaneswar, Odisha

  const mapOptions = {
    zoom: 12,
    center: bhubaneswar,
  };

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  const marker = new google.maps.Marker({
    position: bhubaneswar,
    map: map,
    icon: 'avatar.jpg', // Replace with the path to your avatar image
  });
}










document.getElementById('resume').addEventListener('click', function() {
  // Ensure the resume file exists in the same directory
  const resumePath = 'https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20(%20PDFDrive%20).pdf';
  
  // Check if the file exists
  fetch(resumePath, { method: 'HEAD' })
      .then(response => {
          if (response.ok) {
              // Create an anchor element
              const a = document.createElement('a');
              // Set the href and download attributes for the resume
              a.href = resumePath;
              a.download = 'My_Resume.pdf';
              // Append the anchor to the body
              document.body.appendChild(a);
              // Programmatically click the anchor to trigger the download
              a.click();
              // Remove the anchor from the document
              document.body.removeChild(a);
          } else {
              alert('Resume file not found.');
          }
      })
      .catch(error => {
          console.error('Error fetching resume file:', error);
          alert('Error downloading resume. Please try again later.');
      });
});
