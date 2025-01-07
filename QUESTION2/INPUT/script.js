 // Get the button and the user list container
 var fetchButton = document.getElementById("fetchButton");
 var userList = document.getElementById("userList");

fetchButton.addEventListener("click",function(){
    // Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the HTTP request method, URL, and whether it's asynchronous
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

// Define what happens when the request is completed successfully
xhr.onload = function() {
    if (xhr.status == 200) {
        // Parse the JSON response
        var users = JSON.parse(xhr.responseText);

        // Extract and log the user names to the console
        console.log(users);
         // Clear the previous content in the list
         userList.innerHTML = '';
         
        users.forEach(function(user) {
            var listItem = document.createElement("li");
             listItem.textContent = user.name; // Add the user's name to the list item
             userList.appendChild(listItem);  // Append the item to the list
        });
    } else {
        console.log("Error with request: " + xhr.statusText);
    }
};

// Define what happens if there is an error with the request
xhr.onerror = function() {
    console.log("Request failed");
};

// Send the request to the API
xhr.send();

})