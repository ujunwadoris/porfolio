function initMap() {
    var location = { lat: 43.4643, lng: -80.5204 }; // Replace with your desired coordinates

    var map = new google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 15
    });

    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "My Location"
    });
  
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return false;
    }
    // Additional validation logic can be added here

    return true;
  }
}