const loginBtn = document.getElementById("loginBtn");
const statusText = document.getElementById("status");

// Dekodede hemmelige informasjone i console
const secretUsername = atob("YWRtaW4=");
const secretPassword = atob("dmF1bHQyMDI2");

loginBtn.addEventListener("click", login);

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  statusText.textContent = "";
  statusText.className = "status";

  if (!username || !password) {
    statusText.textContent = "Du må skrive inn brukernavn og passord.";
    return;
  }

  if (username === secretUsername && password === secretPassword) {
    statusText.className = "status success";
    statusText.textContent = "Autentisering godkjent. Omdirigerer...";

    loginBtn.disabled = true;
    loginBtn.querySelector("span").textContent = "Godkjent...";

    setTimeout(() => {
      window.location.href = "admin.html";
    }, 900);
  } else {git
    statusText.textContent = "Feil brukernavn eller passord.";
    // Shake animation on error
    const card = document.querySelector(".card");
    card.style.animation = "none";
    card.style.transform = "translateX(6px)";
    setTimeout(() => {
      card.style.transform = "translateX(-6px)";
    }, 80);
    setTimeout(() => {
      card.style.transform = "translateX(4px)";
    }, 160);
    setTimeout(() => {
      card.style.transform = "translateX(0)";
      card.style.transition = "transform 0.2s ease";
    }, 240);
  }
}

// Hint til den som undersøker koden
console.log("Hint: Innloggingen sjekkes i scriptet.");
