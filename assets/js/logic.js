const themeChangerButton = document.querySelector(".toggle-button");

// For getting the blog data
const dataFromLocalStorage = function() 
{
    const unreadyData = localStorage.getItem("blogs");
    const readyData = JSON.parse(unreadyData);
    return readyData || [];
}

// For applying a theme
const applyTheme = function(theme)
{
    let mainColor, secondaryColor, tertiaryColor, accentColor, secondAccentColor, textColor;

    if(theme === "dark-theme")
    {
        // Dark Theme
        mainColor = "#7a321c";
        secondaryColor = "#1e1e1e";
        tertiaryColor = "#3e3e3e";
        accentColor = "#301400";
        secondAccentColor = "#ffffff";
        textColor = "#ffffff";
    }
    else
    {
        // Light Theme
        mainColor = "#db7f34";
        secondaryColor = "#747474";
        tertiaryColor = "#ffffff";
        accentColor = "#e7ab3c";
        secondAccentColor = "#000000";
        textColor = "#000000";
    }

    // Set all the properties, I have a few...
    document.documentElement.style.setProperty("--main-color", mainColor);
    document.documentElement.style.setProperty("--secondary-color", secondaryColor);
    document.documentElement.style.setProperty("--tertiary-color", tertiaryColor);
    document.documentElement.style.setProperty("--accent-color", accentColor);
    document.documentElement.style.setProperty("--second-accent-color", secondAccentColor);
    document.documentElement.style.setProperty("--text-color", textColor);

}

// For handling which theme to change to
const handleThemeChange = function() 
{
    // Get theme from local storage
    const theme = localStorage.getItem("theme") || "dark-theme";
    console.log(theme);
   
    // Switch from dark and light themes
    let diffTheme;
    if (theme === "light-theme") { diffTheme = "dark-theme" }
    else { diffTheme = "light-theme" }
    console.log(diffTheme);


    localStorage.setItem("theme", diffTheme)
    applyTheme(diffTheme);
}

// Sets up the theme changer to the button
themeChangerButton.addEventListener("click", () => 
{
    handleThemeChange();
});