// AJAX Example using XMLHttpRequest:
// javascript
// Copy code
// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the HTTP request method, URL, and whether it's asynchronous
xhr.open("GET", "https://api.example.com/data", true);

// Define what happens when the request is completed successfully
xhr.onload = function() {
    if (xhr.status == 200) {
        console.log("Response received: ", xhr.responseText);
    } else {
        console.log("Error with request:", xhr.statusText);
    }
};

// Send the request
xhr.send();
console.log(xhr)