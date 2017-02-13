var Slider = {
  nrPhoto: 0,
  changeSlide: function() {
    (this.nrPhoto < 4) ? this.nrPhoto++ : this.nrPhoto = 0;
    this.showSlide();
  },
  showSlide: function(){
    var handler = document.getElementsByClassName("galleryPhoto");
    var nrPhoto = this.nrPhoto;
    var lastPhoto = (nrPhoto === 0) ? handler[4] : handler[nrPhoto-1];
    lastPhoto.style.display = "none";
    handler[nrPhoto].style.display="flex";
  }
};

setInterval(function(){
  Slider.changeSlide()
}, 4000);

var Section = {
  showSection: function(e) {
    var elTarget = e.target;
    var el = elTarget.hasAttribute("href") ? elTarget : elTarget.parentNode;
    var sectionName = el.getAttribute("href");
    var handler = document.getElementsByTagName("main")[0];

    e.preventDefault();
    handler.style.display = "flex";
    document.querySelector(sectionName).style.display = "flex";
  },
  hideSection: function(e){
    var section = document.getElementsByTagName("section");
    var main = document.getElementsByTagName("main")[0];
    var elTarget = e.target;

    if (elTarget === main || elTarget.className === "close-btn" || elTarget.parentNode.className === "close-btn") {
      main.style.display = "none";
      for(i=0, x=section.length;i<x;i++){
        section[i].style.display = "none";
      }
    }
  },
  events: function(){
    var handler = document.getElementsByClassName("menu-link");

    for(i=0, x=handler.length;i<x;i++){
      handler[i].addEventListener("click", Section.showSection);
    }
    document.getElementsByTagName("main")[0].addEventListener("click", Section.hideSection);
  }
};

Section.events();
