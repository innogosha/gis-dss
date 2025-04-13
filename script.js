document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const userInfo = document.getElementById("user-info");

  const user = {
    name: "Innogosha",
    isLoggedIn: false,
  };

  const updateUI = () => {
    if (user.isLoggedIn) {
      loginBtn.style.display = "none";
      logoutBtn.style.display = "inline-block";
      userInfo.textContent = `Welcome, ${user.name}`;
    } else {
      loginBtn.style.display = "inline-block";
      logoutBtn.style.display = "none";
      userInfo.textContent = "";
    }
  };

  loginBtn.addEventListener("click", () => {
    user.isLoggedIn = true;
    updateUI();
  });

  logoutBtn.addEventListener("click", () => {
    user.isLoggedIn = false;
    updateUI();
  });

  updateUI();

  // Initialize the map
  const map = L.map("map-container").setView([-6.816, 39.280], 6); // Coordinates for Tanzania
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  L.marker([-6.816, 39.280]).addTo(map).bindPopup("Tanzania").openPopup();
});