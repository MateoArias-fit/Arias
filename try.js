document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".day-btn");
    const box = document.querySelector(".box");
    let isAtTop = true;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const color = button.getAttribute("data-color");

            if (isAtTop) {
                box.style.transform = "translateY(150px)";
            } else {
                box.style.transform = "translateY(0)";
            }
            isAtTop = !isAtTop;

            setTimeout(() => {
                box.style.backgroundColor = color;
            }, 300);
        });
    });
});
