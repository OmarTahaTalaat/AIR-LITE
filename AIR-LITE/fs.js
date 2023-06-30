// Dark
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
} 

// onClick
function BookAFlight2() {
    "use strict"
    window.location.href("it.project/BookAFlight2.htm");
}
function BookAFlight() {
    "use strict"

    window.location.href("it.project/BookAFlight.htm");
}
function AboutUs() {
    "use strict"

    window.location.href("it.project/AboutUs.htm");
}
function manageyourtrip() {
    "use strict"

    window.location.href("it.project/manageyourtrip.htm");
}
function Oslo() {
    "use strict"

    window.location.href("it.project/Oslo.htm");
}
function policy() {
    "use strict"

    window.location.href("it.project/policy.htm");
}
function london() {
    "use strict"

    window.location.href("london/index.html");
}
function login() {
    "use strict"

    window.location.href("login form/index.html");
}
function signup() {
    "use strict"

    window.location.href("signup/index.html");
}
function aire() {
    

    window.location.href("index.html");
}













//scroll bar
/* 
window.onscroll = function(){
    myFunction()
};

var myHeader = document.getElementById("mine");

var sticky = myHeader.offsetTop;

function myFunction(){
    if (window.pageXOffset > sticky){
        myHeader.classList.add("sticky");
    } 
    else {
        myHeader.classList.remove("sticky");
    }
}
*/












/*it was for intro but have no time

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    
    setTimeout(()=> {
      
        logoSpan.forEach((span,idx) => {
      
            setTimeout(()=> {
                span.classlist.add('active');

            }, (idx + 1) * 400)
        }); 
        setTimeout(()=> {
      
            logoSpan.forEach((span,idx) => {
          
                setTimeout(()=> {
                    span.classlist.remove('active');
                    span.classlist.add('fade');

                }, (idx + 1) * 50)
            })
        },2000);
        setTimeout(()=>{
            intro.style.top='-100vh';
        },2300);  
    })
})
*/