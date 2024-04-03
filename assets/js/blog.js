const mainElement = document.querySelector('main');
const backButton = document.querySelector('.back-button');

const instantiateList = function()
{
    const blogData = dataFromLocalStorage();

    if (blogData) {


        /*  
        This is how I set up my html / css to work with, putting it here so I know what I need to make with JS

        <article class="card">
            <img src="./assets/images/fennec.png" alt="A cartoonish fennec fox" class="card-image">
            <div class="card-content">
                <div class="card-title">
                    <h2>Title</h2>
                    <p class="card-by">Username</p>
                </div>
                <p>EXAMPLE EXAMPLE EXAMPLE</p>
            </div>
        </article> 

        */
        blogData.forEach(blog => {

          // Create the article element
          const articleEl = document.createElement('article');
          articleEl.classList.add('card');
    
          // Add image to the article
          const image = document.createElement('img');

          image.classList.add('card-image');
          image.setAttribute('src', './assets/images/fennec.png');
          image.setAttribute('alt', 'A cartoonish fennec fox');
          articleEl.appendChild(image);
    
          // Add the div element
          const contentDiv = document.createElement('div');
          contentDiv.classList.add('card-content');
    
          // Add title and username to the div
          const title = document.createElement('h2');
          title.textContent = blog.title;
          const byLine = document.createElement('p');
          byLine.classList.add('card-by');
          byLine.textContent = `by ${blog.username}`;
          
          // Should put the username beside the title nicely
          const titleContainer = document.createElement('div');
          titleContainer.classList.add('card-title');
          titleContainer.appendChild(title);
          titleContainer.appendChild(byLine);
          contentDiv.appendChild(titleContainer);
    
          // Add the blog content
          const content = document.createElement('p');
          content.textContent = blog.content;
          contentDiv.appendChild(content);
    
          // Add div to the article, then add article to main
          articleEl.appendChild(contentDiv);
          mainElement.appendChild(articleEl);
        });
    }
}

// "The DOMContentLoaded event fires when the HTML document has been completely parsed"
// This seemed smart to use, wait for the document to load, then make the list
document.addEventListener('DOMContentLoaded', instantiateList);

backButton.addEventListener("click", () => 
{
    location.href = "./index.html";
});