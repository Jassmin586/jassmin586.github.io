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
  activeSection: "",
  showSection: function(e) {
    if (e.target.classList.contains("menu-link") || e.target.parentNode.classList.contains("menu-link")){

      var el = e.target.hasAttribute("href") ? e.target : e.target.parentNode;
      var sectionName = el.getAttribute("href");
      var section = document.querySelector(sectionName);
      var main = document.getElementsByTagName("main")[0];
      Section.activeSection = section;

      e.preventDefault();
      main.className = "open";
      section.className = "open";
  }
  },
  hideSection: function(e){
    if (e.target === e.currentTarget || e.target.className === "close-btn") {

      Section.activeSection.classList.remove("open");
      e.currentTarget.classList.remove("open");
    }
  },
    events: function(){
      document.getElementsByTagName("nav")[0].addEventListener("click", Section.showSection);
      document.getElementsByTagName("main")[0].addEventListener("click", Section.hideSection);
    }
  };

  Section.events();
