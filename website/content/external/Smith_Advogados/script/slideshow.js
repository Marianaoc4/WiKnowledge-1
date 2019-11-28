var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) { 
  var i=0;
  var slides = document.getElementsByClassName("mySlides");
  setTimeout(showSlides, 4500); 
  slideIndex++;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  slides[slideIndex-1].style.display = "block"; 

}