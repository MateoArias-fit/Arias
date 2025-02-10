document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".day-btn");
    const box = document.querySelector(".box");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const color = button.getAttribute("data-color");

            
            box.style.transition = "transform 1s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease-out, border-color 0.3s ease-out";
            box.style.transform = "translateY(-500px)";  

            
            box.style.backgroundColor = color;

            
            setTimeout(() => {
                box.style.transition = "transform 1s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.4s ease-out";
                box.style.backgroundColor = "transparent"; 
                box.style.borderColor = color; 
            }, 500); 

            
            setTimeout(() => {
                box.style.transform = "translateY(0)"; 
            }, 1000); 
        });
    });
});
