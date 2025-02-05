let lastPosition = "top";

function showBox(day) {
    const box = document.getElementById("animated-box");

    const colors = {
        Monday: "purple",
        Tuesday: "blue",
        Wednesday: "green",
        Thursday: "yellow",
        Friday: "orange",
        Saturday: "brown",
        Sunday: "red"
    };

    box.classList.remove("hidden");
    box.style.opacity = "1";
    box.style.backgroundColor = colors[day];

    if (lastPosition === "top") {
        box.style.top = "60%";  
        lastPosition = "bottom";
    } else {
        box.style.top = "20%"; 
        lastPosition = "top";
    }

    setTimeout(() => {
        box.style.backgroundColor = "white";
        box.style.border = `5px solid ${colors[day]}`;
    }, 1000);
}
