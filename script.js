// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
document.querySelector('body').classList.toggle('mobile-nav-active')
this.classList.toggle('fa-xmark')
})


// Typing Effect

let typed = new Typed('.auto-input',{
strings:['Web Developer!','Front-End Developer!','Backend Developer!','Full Stack Developer!'],
typeSpeed: 100,
backSpeed: 100,
backDelay: 2000,
loop: true,
})

//Active link state on scroll

//Get all links
let navLinks = document.querySelectorAll('nav ul li a')
// Get all sections
let sections = document.querySelectorAll('section')

window.addEventListener('scroll',function(){
      const scrollpos = this.window.scrollY + 20
      sections.forEach (sections => {
            if(scrollpos > sections.offsetTop && scrollpos < (section.offsetTop + section.offsetHeight)){
                   navLinks.forEach(link =>{
                      link.classlist.remove('active');
                         if (section.getAttribute('id') === link.getAttribute('href').substrings(1)){
                         link.classList.add('active')
}
});
}
});
});