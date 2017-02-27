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
      section.classList.add("open");
  }
  },
  hideSection: function(e){
    if (e.target === this || e.target.className === "close-btn") {

      Section.activeSection.classList.remove("open");
      this.classList.remove("open");
    }
  },
    events: function(){
      document.getElementsByTagName("nav")[0].addEventListener("click", Section.showSection);
      document.getElementsByTagName("main")[0].addEventListener("click", Section.hideSection);
    }
  };

  Section.events();

  var pCollapse = {
    showParagraph: function(e) {
      e.preventDefault();
      if (e.target.hasAttribute("href") && e.target.parentNode.nodeName == "LI") {
        var pName = e.target.getAttribute("href");
        document.querySelector(pName).classList.toggle("p-open");
      }
    },
    readMore: function(e) {
      if (e.target.className === "read-more") {
        var parentBtn = e.target.parentNode.className.split(' ')[1];
        var p = document.querySelectorAll("." + parentBtn + " p:not(:first-of-type)");
          for (var i = 0, x = p.length; i < x; i++) {
            p[i].style.display = "block";
          }
        document.querySelector("." + parentBtn).removeChild(e.target);
      }
    },
    events: function(){
      document.querySelector("#services > ul").addEventListener("click", pCollapse.showParagraph);
      document.querySelector(".all-posts").addEventListener("click", pCollapse.readMore);
    }
  };

  pCollapse.events();

  var Gallery = {
    showPhoto: function(e) {
      if (e.target.tagName != "FIGCAPTION") {
        e.target.classList.toggle("big-photo");
      }
    },
    event: function() {
      document.getElementsByClassName("img-group")[0].addEventListener("click", Gallery.showPhoto);
    }
  }

  Gallery.event();
