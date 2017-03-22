var Website = {
  nrPhoto: 0,
  activeSection: "",
  showSection: function(e) {
    if (e.target.classList.contains("menu-link") || e.target.parentNode.classList.contains("menu-link")){

      var el = e.target.hasAttribute("href") ? e.target : e.target.parentNode;
      var sectionName = el.getAttribute("href");
      var section = document.querySelector(sectionName);
      var main = document.getElementsByTagName("main")[0];
      Website.activeSection = section;

      e.preventDefault();
      main.className = "open";
      section.classList.add("open");
    }
  },
  hideSection: function(e){
    if (e.target === this || e.target.className === "close-btn" || e.target.parentNode.className === "close-btn") {

      Website.activeSection.classList.remove("open");
      this.classList.remove("open");
    }
  },
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
  },
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
    document.getElementsByTagName("nav")[0].addEventListener("click", Website.showSection);
    document.getElementsByTagName("main")[0].addEventListener("click", Website.hideSection);
    document.querySelector("#services > ul").addEventListener("click", Website.showParagraph);
    document.querySelector(".all-posts").addEventListener("click", Website.readMore);
  }
};

setInterval(function(){
  Website.changeSlide()
}, 4000);

Website.events();


// GoogleMaps
function initMap() {
  var uluru = {lat: 51.5054213, lng: -0.126667};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
