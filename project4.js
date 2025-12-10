// function with a return feature
function makeGreeter(greeting) {
    return function(name) {
        return greeting + ", " + name + "!";
    };
}
function getGreeting(name) {
    return "Hello, " + name + "!";
}

function openTab(tabId) {
    // Hide all tab contents
    var contents = document.querySelectorAll('.tab-content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the selected tab content
    var activeContent = document.getElementById(tabId);
    if (activeContent) {
        activeContent.style.display = 'block';
    }
    //shows the content in a block

    // Optionally, update button styles (not required for functionality)
    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    // Finds the buttons that trigger this tab and add 'active' class
}

document.addEventListener('DOMContentLoaded', function() {
    openTab('Basics');
    // Set the user's name in the h1
    var name = "John Kelly";
    var greeting = getGreeting(name);
    var userNameSpan = document.getElementById("userName");
    if (userNameSpan) {
        userNameSpan.textContent = name;
    }
});
