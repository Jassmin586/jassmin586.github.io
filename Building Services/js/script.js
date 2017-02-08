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
    var name = e.target.getAttribute("href");
    var main = document.getElementsByTagName("main")[0];
    main.style.display = "flex";
    document.querySelector(name).style.display = "flex";
  },
  events: function(){
    var handler = document.getElementsByClassName("menu-link");
    for(i=0, x=handler.length;i<x;i++){
      handler[i].addEventListener("click", Section.showSection);
    }
  }
};

Section.events();
