document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".day-btn");
    const box = document.querySelector(".box");
    let lastPosition = "top"; // Track last position

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const color = button.getAttribute("data-color");

            // Determine direction: move down if at top, move up if at bottom
            if (lastPosition === "top") {
                box.style.transform = "translateY(150px)"; // Move Down
                lastPosition = "bottom";
            } else {
                box.style.transform = "translateY(0)"; // Move Up
                lastPosition = "top";
            }

            // Change color smoothly after moving
            setTimeout(() => {
                box.style.backgroundColor = color;
            }, 300); // Adjust delay if needed
        });
    });
});
