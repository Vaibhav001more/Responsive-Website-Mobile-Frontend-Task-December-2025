// Sidebar Toggle
const hamburger=document.getElementById('hamburger');const sidebar=document.getElementById('sidebar');
hamburger.addEventListener('click',()=>{sidebar.classList.toggle('active');});

// Carousel Functionality
const slides=document.querySelectorAll('#carousel img');let index=0;
document.querySelector('.next').addEventListener('click',()=>{slides[index].classList.remove('active');index=(index+1)%slides.length;slides[index].classList.add('active');});
document.querySelector('.prev').addEventListener('click',()=>{slides[index].classList.remove('active');index=(index-1+slides.length)%slides.length;slides[index].classList.add('active');});

// Preload Images
slides.forEach(slide=>{const img=new Image();img.src=slide.src;});