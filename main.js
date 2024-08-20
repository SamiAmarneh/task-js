const navLinks = document.querySelectorAll('.navigation a');


navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    
    e.preventDefault();

    const href = link.getAttribute('href');

    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
});


const moreDetailsLinks = document.querySelectorAll('.more-details');


moreDetailsLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
  
    e.preventDefault();

    const parent = link.parentNode;

    parent.classList.toggle('active');
  });
});


window.addEventListener('scroll', () => {
 
  const scrollPosition = window.scrollY;

  const sections = document.querySelectorAll('section');

  sections.forEach((section) => {

    const top = section.offsetTop;

    if (scrollPosition >= top - 200 && scrollPosition < top + section.offsetHeight) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});



var icon=document.getElementById("icon");
  icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
      icon.src = "sun-solid-24.png" ;
    }else{
      icon.src="moon.png" ;
    }
  }
/************************************************ */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navigation = document.querySelector(".navigation");

  hamburger.addEventListener("click", () => {
      navigation.classList.toggle("active");
  });

  if (performance.navigation.type === 1) {
      window.location.href = "loading.html";
  }
});
/************************************** */



