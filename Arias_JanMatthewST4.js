function showRestaurantDetails(name, image, description) {
    const restaurantHTML = `
        <div id="restaurant-details" class="container-fluid d-flex justify-content-between align-items-center p-5 bg-white text-dark">
            <button id="backToMenu" class="btn btn-warning main-menu-btn">Main Menu</button>
            <div class="restaurant-name">${name}</div>
            <img src="${image}" class="restaurant-image img-fluid rounded" alt="${name}">
            <div class="restaurant-info">
                <h2 class="text-danger">${name}</h2>
                <p>${description}</p>
            </div>
        </div>
    `;

    document.body.innerHTML = restaurantHTML;

    document.getElementById('backToMenu').addEventListener('click', function() {
        location.reload();
    });
}

document.querySelectorAll('.restaurant-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.overlay').style.opacity = '1';
    });
    card.addEventListener('mouseleave', function() {
        this.querySelector('.overlay').style.opacity = '0';
    });
    card.addEventListener('click', function() {
        showRestaurantDetails(this.dataset.name, this.dataset.image, this.dataset.description);
    });
});
