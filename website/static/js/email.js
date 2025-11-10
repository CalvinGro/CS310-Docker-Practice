//Sending emails from contact page
function sendMail(event){

    event.preventDefault();

    let parms = {
        full_name : document.getElementById('full_name').value.trim(),
        email : document.getElementById('email').value.trim(),
        phone : document.getElementById('phone').value.trim(),
        message : document.getElementById('message').value.trim(),
    }

    // Check if the required fields are filled
    if (!parms.full_name || !parms.email || !parms.phone || !parms.message) {
        alert("Please fill in all required fields.");
        return;
    }

    emailjs.send("service_583381m", "template_71apcys", parms).then(
        alert("Your message has been sent successfully!"),
        document.getElementById('contact-form').reset());
}