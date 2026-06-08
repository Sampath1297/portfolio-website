const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    if (name.trim() === "") {
        document.getElementById("message").innerText =
            "Please enter your name.";
    } else {
        document.getElementById("message").innerText =
            "Thank you, " + name + "!";
    }
});
