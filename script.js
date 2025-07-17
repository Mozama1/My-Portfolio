
//JS (RECOMENDED)

// let navBar = document.querySelector(".navbar");

// window.addEventListener("scroll", function() {
//     if (window.scrollY > 20) {
//         navBar.classList.add("sticky");
//     } else {
//         navBar.classList.remove("sticky");
//     }
// });
  

                                            //OR

//JS QUERY(ALTERNATIVE)

$(document).ready(function(){
 $(window).scroll(function(){
    if(this.scrollY>20){
        $('.navbar').addClass("sticky");
    }
    else{
        $('.navbar').removeClass("sticky"); 
    }
    // scroll btn
     if(this.scrollY > 500){
    $('.scroll-up i').addClass("show")
}
else{
     $('.scroll-up i').removeClass("show")
}

 });
 $('.scroll-up i').click(function(){
    $('html').animate({scrollTop:0})
 })
// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("activeee");
    $('.menu-btn i').toggleClass("eee");
    if ($('body').hasClass("light-mode") && $('.navbar .menu').hasClass("activeee")) {
 $('.menu li a').css("color", "white");
}

 });
                    //OR

 // let menuBtn=document.querySelector(".menu-btn");
// let menu=document.querySelector(".navbar .menu");
// let cross=document.querySelector(".menu-btn i");

// menuBtn.addEventListener("click",function(){
//     menu.classList.toggle("activeee");
//     cross.classList.toggle("eee");

// })



$('.carousel').owlCarousel({
  margin:20,
  loop:true,
  autoPlayTimeOut:2000,
  autoPlayHoverPause:true,
  responsive:{
    0:{
        items:1,
        nav:false
    },
    600:{
         items:2,
        nav:false
    },
    1000:{
         items:3,
        nav:false
    }

  }
});
let type = new Typed (".typing" , {
    strings:[" Web Developer" ,"Front End Intern" ,"Web Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
   
})




/*
let moonIcon=document.querySelector("#moon");
let sunIcon=document.querySelector("#sun");
let currMode="dark";
moonIcon.addEventListener("click",()=>{
    sunIcon.style.display ="block";
    moonIcon.style.display="none";

     if(currMode==="dark"){
        currMode="light";
      document.querySelector(".home").style.background = `linear-gradient(to right , #f3e0ffff , #fcfcd3ff)`;
     document.querySelector(".navbar").classList.add("sticky");
      document.querySelector(".navbar.sticky").style.backgroundColor="#8b5d94ff";
      document.querySelector(".navbar .logo a").style.color=" #fcfcd3ff";
       document.querySelector(".navbar .logo a span").style.color="#333333 ";
       document.querySelector(".home").style.color="#3f3f3fff";
       document.querySelector(".home .home-content .text-3 span").style.color="#8b5d94ff";
       document.querySelector(".home .home-content a").style.color="#8b5d94ff";
     document.querySelector(".home .home-content a").style.borderColor="#8b5d94ff";
 
 
  document.querySelector(".home .home-content a").addEventListener("mouseenter", () => {
   document.querySelector(".home .home-content a").style.borderColor = "#3f3f3f";
    document.querySelector(".home .home-content a").style.color = "#3f3f3f";
});
document.querySelector(".home .home-content a").addEventListener("mouseleave", () => {
   document.querySelector(".home .home-content a").style.borderColor = "#8b5d94ff";
    document.querySelector(".home .home-content a").style.color = "#8b5d94ff";
});

 document.querySelector(".mood #sun").addEventListener("mouseenter", () => {
    document.querySelector(".mood #sun").style.color = "#3f3f3f";
});
document.querySelector(".mood #sun").addEventListener("mouseleave", () => {
    document.querySelector(".mood #sun").style.color = "white";
});

document.querySelectorAll(".navbar .menu li a").forEach(link => {
  document.querySelectorAll(".navbar .menu li a").addEventListener("mouseenter", () => {
    link.style.color = "#333333";
});
link.addEventListener("mouseleave", () => {
    document.querySelectorAll(".navbar .menu li a").style.color = "white";
});
});
document.querySelector(".home .max-width .myppicAnimation1").style.backgroundColor = "#8b5d947a";
document.querySelector(".home .max-width .myppicAnimation2").style.backgroundColor = "#8b5d949a";
document.querySelector(".home .max-width .myppicAnimation3").style.border = "5px solid #8b5d94ec";
} console.log(currMode);
});

sunIcon.addEventListener("click",()=>{
    sunIcon.style.display ="none";
     moonIcon.style.display="block";
      if(currMode==="light"){
        currMode="dark";
        document.querySelector(".home").style.background = "black";
     document.querySelector(".navbar").classList.add("sticky");
      document.querySelector(".navbar.sticky").style.backgroundColor="crimson";
      document.querySelector(".navbar .logo a").style.color=" white";
       document.querySelector(".navbar .logo a span").style.color="black";
       document.querySelector(".home").style.color="white";
       document.querySelector(".home .home-content .text-3 span").style.color="crimson";
       document.querySelector(".home .home-content a").style.color="white";
     document.querySelector(".home .home-content a").style.borderColor="white";
     
     
  document.querySelector(".home .home-content a").addEventListener("mouseenter", () => {
   document.querySelector(".home .home-content a").style.borderColor = "crimson";
    document.querySelector(".home .home-content a").style.color = "crimson";
});
document.querySelector(".home .home-content a").addEventListener("mouseleave", () => {
   document.querySelector(".home .home-content a").style.borderColor = "#white";
    document.querySelector(".home .home-content a").style.color = "#white";
});

 document.querySelector(".mood #moon").addEventListener("mouseenter", () => {
    document.querySelector(".mood #moon").style.color = "#3f3f3f";
});
document.querySelector(".mood #moon").addEventListener("mouseleave", () => {
    document.querySelector(".mood #moon").style.color = "white";
});



}console.log(currMode);
});
*/

const moonIcon = document.querySelector("#moon");
const sunIcon = document.querySelector("#sun");
const body = document.body;

moonIcon.addEventListener("click", () => {
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
  moonIcon.style.display = "none";
  sunIcon.style.display = "block";
  document.querySelector(".home").style.background = `linear-gradient(to right , #f3e0ffff , #fcfcd3ff)`;
  document.querySelector(".skills").style.background = `linear-gradient(to right , #f3e0ffff , #fcfcd3ff)`;
   document.querySelector(".skills .title").classList.add("skills-gradient-line");
    document.querySelector(".contact").style.background = `linear-gradient(to right , #f3e0ffff , #fcfcd3ff)`;
   document.querySelector(".contact .title").classList.add("contact-gradient-line");

document.querySelector(".home .max-width .myppicAnimation1").style.backgroundColor = "#8b5d947a";
document.querySelector(".home .max-width .myppicAnimation2").style.backgroundColor = "#8b5d949a";
document.querySelector(".home .max-width .myppicAnimation3").style.border = "5px solid #8b5d94ec";
});

sunIcon.addEventListener("click", () => {
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
   document.querySelector(".home").style.background = "black";
    document.querySelector(".skills").style.background = "black";
   document.querySelector(".home .max-width .myppicAnimation1").style.backgroundColor = "rgba(220, 20, 60, 0.452)";
document.querySelector(".home .max-width .myppicAnimation2").style.backgroundColor = "rgba(220, 20, 60, 0.452)";
document.querySelector(".home .max-width .myppicAnimation3").style.border = "5px solid crimson";
document.querySelector(".skills .title").classList.remove("skills-gradient-line");
 document.querySelector(".contact").style.background = "black";
   document.querySelector(".contact .title").classList.remove("contact-gradient-line");

});

  });