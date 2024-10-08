// Function to set a theme (either light or dark)
function setTheme(themeName) {
  localStorage.setItem("theme", themeName); // Save the theme in localStorage
  document.documentElement.className = themeName; // Apply the theme by setting the class
  document.getElementById("theme-icon").classList.toggle("ri-sun-fill");
}

// Function to toggle between light and dark themes
function toggleTheme() {
  // If current theme is dark, switch to light
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  }
  // If current theme is light, switch to dark
  else {
    setTheme("theme-dark");
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  // Check what the user's previous choice was from localStorage
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark"); // If previously dark, set dark theme
  } else {
    setTheme("theme-dark"); // Default to light theme
  }
})();

// SIDEBAR

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("moved-left");
  // if (sidebar.classList.contains('moved-left')) {
  //   document.removeEventListener('click', toggleSidebar);
  // } else {
  //   document.addEventListener('click', toggleSidebar)
  // }
}

// CROUSER

const circleElement = document.querySelector(".circle");

const mouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const speed = 0.13;
const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;

  circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`;

  window.requestAnimationFrame(tick);
};

tick();


// LOADER


// CODE EFFECT
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let interval = null;

document.querySelectorAll('.code').forEach(element => {
  element.onmouseover = event => {  
    let iteration = 0;
    
    // Clear any existing interval to avoid conflicts
    clearInterval(interval);
    
    // Create a new interval to handle the animation
    interval = setInterval(() => {
      // Update the text of the target element
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            // Return the original letter if the index is less than iteration
            return event.target.dataset.value[index];
          }
          
          // Return a random letter from A-Z
          return letters[Math.floor(Math.random() * 52)];
        })
        .join("");
      
      // Clear the interval once all letters have been replaced
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      // Increment iteration slowly to achieve the animation effect
      iteration += 1 / 3;
    }, 30);
  };
});


