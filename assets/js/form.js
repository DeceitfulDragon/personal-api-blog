const formElement = document.querySelector('form');

// For changing the page to the blog html file
const changePage = function() 
{
    location.href = "./blog.html";
}

// For setting blog data to local storage
const dataToLocalStorage = function(data)
{
    const blogData = dataFromLocalStorage();
}

// For when the send message button is pressed
const handleFormSubmit = function(event) 
{
    event.preventDefault();

    // Get elements from the form
    const usernameEl = document.querySelector('#messageUsername').value.trim();
    const titleEl = document.querySelector('#messageTitle').value.trim();
    const contentEl = document.querySelector('#messageContent').value.trim();

    // Return an alert window if not all the form boxes have been filled out
    if(!usernameEl || !titleEl || !contentEl) { return window.alert("You have not filled out all the form boxes. Please review.")}

    // Form data object
    const formData = {
        username: usernameEl,
        title: titleEl,
        content: contentEl
    }

    dataToLocalStorage(formData);
    changePage();
}

formElement.addEventListener('submit', handleFormSubmit);