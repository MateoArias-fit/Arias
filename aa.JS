document.getElementById("colorChangeBtn").addEventListener("click", function () {
    const colors = ["#D3D3D3", "#FFFFFF"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".resume-container").style.backgroundColor = randomColor;
});
