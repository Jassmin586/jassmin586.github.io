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
