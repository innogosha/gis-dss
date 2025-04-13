document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const registerBtn = document.getElementById("register-btn");
  const userInfo = document.getElementById("user-info");

  const registerModal = document.getElementById("register-modal");
  const closeBtn = document.querySelector(".close-btn");
  const registerForm = document.getElementById("register-form");

  const users = []; // Array to store registered users
  let currentUser = null;

  const updateUI = () => {
    if (currentUser) {
      loginBtn.style.display = "none";
      logoutBtn.style.display = "inline-block";
      registerBtn.style.display = "none";
      userInfo.textContent = `Welcome, ${currentUser}`;
    } else {
      loginBtn.style.display = "inline-block";
      logoutBtn.style.display = "none";
      registerBtn.style.display = "inline-block";
      userInfo.textContent = "";
    }
  };

  registerBtn.addEventListener("click", () => {
    registerModal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    registerModal.style.display = "none";
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if user already exists
    if (users.find(user => user.username === username)) {
      alert("User already exists!");
    } else {
      users.push({ username, password });
      alert("Registration successful!");
    }

    registerModal.style.display = "none";
    registerForm.reset();
  });

  loginBtn.addEventListener("click", () => {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      currentUser = username;
      alert("Login successful!");
    } else {
      alert("Invalid username or password!");
    }

    updateUI();
  });

  logoutBtn.addEventListener("click", () => {
    currentUser = null;
    alert("Logged out!");
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