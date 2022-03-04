var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function connect(){
  let user="iorana"
  let mdp="ght1velo"
  let userinput = document.getElementById("butt").value;
  let mdpinput = document.getElementById("butt1").value;
  if ( userinput == user && mdpinput == mdp){
    window.location.href = "http://127.0.0.1:5500/index.html";
    alert("Connexion réussie");
  }
  else if (userinput == "" || mdpinput == ""){
    alert('Champ vide');
  }

  else{
    alert('échec');
  }

}
