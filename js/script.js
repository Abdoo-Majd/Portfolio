// ----------------- Scrolling Things ----------------------- // 

let sections = document.querySelectorAll('section') ; 
let navLinks = document.querySelectorAll('header nav a ') ; 

window.onscroll = () => {
    sections.forEach(sec => {
       let top = window.scrollY ; 
       let offset = sec.offsetTop -150 ; 
       let height = sec.offsetHeight; 
       let id = sec.getAttribute('id') ; 

       if (top>= offset && top < offset+height) {
        navLinks.forEach(links=> {
            links.classList.remove('active') ; 
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        })
       };
    });

// ----------- Sticky Navbar ----------------- // 

let header =document.querySelector('header');
header.classList.toggle('sticky' , window.scrollY > 100);  
};


// --------- Toggle Icon Navbar -------------- //

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", () => {
  // Toggle the 'active' class on the navbar to show/hide it
  navbar.classList.toggle("active");
  // Toggle the 'fa-bars' and 'fa-times' classes on the menu icon to change the icon
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
});