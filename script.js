// Initialize and add the map
function initMap() {
  // The location of Tunisia
  var Tunisia= {lat: 36.806496, lng: 10.181532};
  // The map, centered at Tunisia
  var map = new google.maps.Map(
      document.querySelector(".map"), {zoom: 4, center: Tunisia});
  // The marker, positioned at Tunisia
  var marker = new google.maps.Marker({position:Tunisia, map: map});
}
// Smooth scrolling
$("#navbar a, .btn").on("click", function(event) {

  if(this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({scrollTop: $(hash).offset().top - 100}, 800);
  }
});


// navbar Opacity

window.addEventListener("scroll", function() {
  if(window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});






  
  
   