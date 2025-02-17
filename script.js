// Initialize EmailJS with your user ID
(function() {
  emailjs.init("service_ak"); // Replace with your actual user ID from EmailJS
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Send the form data via EmailJS
  emailjs.sendForm('service_ak', 'template_ak', this)
    .then(function(response) {
      alert("Message sent successfully!");
    }, function(error) {
      alert("Error: " + JSON.stringify(error));
    });
});
