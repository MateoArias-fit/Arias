document.getElementById("colorChangeBtn").addEventListener("click", function () {
    const resumeContainer = document.querySelector(".resume-container");
    const currentColor = getComputedStyle(resumeContainer).backgroundColor;

    if (currentColor === "rgb(255, 255, 255)") { 
        resumeContainer.style.backgroundColor = "#ADD8E6";
    } else {
        resumeContainer.style.backgroundColor = "#ffffff";
    }
});
