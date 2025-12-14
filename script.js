function scrollToStory() {
  document.querySelector(".episode").scrollIntoView({
    behavior: "smooth"
  });
}

const PASSWORD = "Shivam@0720"; // 🔐 change this if you want

function unlock() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("errorMsg");

  if (input === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    error.innerText = "Wrong password ❤️ Try again";
  }
}

function scrollToStory() {
  document.querySelector(".section-header").scrollIntoView({
    behavior: "smooth"
  });
}
