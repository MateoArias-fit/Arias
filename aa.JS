document.getElementById("colorChangeBtn").addEventListener("click", function () {
    const colors = ["#7c5e9a", "#ed7f8b", "#83bfb9", "#4285f4", "#d8eb7f"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".resume-container").style.backgroundColor = randomColor;
});
