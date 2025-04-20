// This button updates your intro text
document.getElementById("changeTextBtn").addEventListener("click", () => {
    document.getElementById("description").textContent =
      "💡 DOM changed! Scion is leveling up in JavaScript.";
  });
  
  // This button changes the overall look of the page
  document.getElementById("changeStyleBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = "#282c34"; // dark theme
    document.getElementById("main-title").style.color = "#61dafb"; // React blue
    document.getElementById("description").style.color = "#ffffff";
  });
  
  // This button toggles a hidden box with a message or removes it
  let surpriseVisible = false;
  
  document.getElementById("toggleElementBtn").addEventListener("click", () => {
    const container = document.getElementById("dynamic-container");
  
    if (!surpriseVisible) {
      const surpriseBox = document.createElement("div");
      surpriseBox.id = "surprise";
      surpriseBox.textContent = "🎉 DOM is your playground, Scion!";
      surpriseBox.style.padding = "10px";
      surpriseBox.style.backgroundColor = "#d1e7dd";
      surpriseBox.style.borderRadius = "10px";
      surpriseBox.style.marginTop = "15px";
      container.appendChild(surpriseBox);
    } else {
      const surpriseBox = document.getElementById("surprise");
      if (surpriseBox) container.removeChild(surpriseBox);
    }
  
    surpriseVisible = !surpriseVisible;
  });
  