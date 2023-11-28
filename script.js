//change navbar style on scroll
window.addEventListener('scroll',function(){
    this.document.querySelector('nav').classList.toggle('window-scroll',this.window.scrollY>0);
})

//show/hide FAQs Answer

const faqs=document.querySelectorAll(".faq");
faqs.forEach(faq=>{
    faq.addEventListener('click',function(){
        faq.classList.toggle('open');

        //change icon
        const icon=faq.querySelector(".faq_icon i");
        if(icon.className==='uil uil-plus'){
            icon.className='uil uil-minus';
        }
        else{
            icon.className='uil uil-plus'
        }
    })
})

//hide/show nav menu
const menu=document.querySelector(".nav_menu");
const menuBtn=document.querySelector("#open_menu_btn");
const closeBtn=document.querySelector("#close_menu_btn");

//show Nav Menu
menuBtn.addEventListener('click',function(){
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
})
//close nav Menu
closeBtn.addEventListener('click',function(){
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
})

//Website Loader Animation
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');  
  }
  function fadeOut(){
    setInterval(loader,3000);
  }
  window.onload=fadeOut;