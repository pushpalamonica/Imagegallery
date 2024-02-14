document.querySelectorAll('.image-container img').forEach(image => {
   image.onclick = ()=>{
      document.querySelector(".display-image").style.display="block";
      document.querySelector(".display-image img").src=image.getAttribute('src');
   }
});

document.querySelector('.display-image span').onclick=()=>{
   document.querySelector(".display-image").style.display="none";
}





