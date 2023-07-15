function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form inputs
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  

  // Perform login validation (replace with your own validation logic)
  if (email === 'Email' && password === 'Password') {
    // Construct Facebook Messenger URL
    var messengerUrl = 'https://www.facebook.com/messages/t/';
    var recipientId = '100005025754099'; // Replace with your Facebook user ID
    var message = 'Hello!'; // Replace with your desired pre-filled message
    var messengerUrlWithParams = messengerUrl + recipientId + '?text=' + encodeURIComponent(message);

    // Redirect to Facebook Messenger page
    window.location.href = messengerUrlWithParams;
    
    // Reset the form
    document.getElementById('myForm').reset();
  } else {
    // Show error message
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = 'Incorrect username or password. Pero char² rani sunduga ra naka butang AHAHAH di pako kabalo mag php';
    errorMessage.style.display = 'block';
  }
}


function submitForm2(event ){
    event.preventDefault();
            
    var comment = document.getElementById ('comment').value;
    var name = document.getElementById ('name').value;
    var email2 = document.getElementById('email2').value;

  // Construct Facebook Messenger URL
  var messengerUrl = 'https://www.facebook.com/messages/t/';
  var recipientId = '100005025754099'; // Replace with your Facebook user ID
  var message = 'Name: ' + name + '\Email: ' + email + '\Comment: ' + comment;
  var messengerUrlWithParams = messengerUrl + recipientId + '?text=' + encodeURIComponent(message);
;

  // Open Facebook Messenger with pre-filled comment
  window.open(messengerUrlWithParams);
  
  // Reset the form
  document.getElementById('myForm').reset();
}

function submitForm3(event){

window.location.href = "https://www.youtube.com/shorts/xHEgHjJvR94";

}










