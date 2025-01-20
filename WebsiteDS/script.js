// ... (previous JavaScript code remains unchanged) ...

// Cart functionality
const cartItems = [];

function addToCart(product) {
    cartItems.push(product);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    let subtotal = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);

        subtotal += item.price;
    });

    const tax = subtotal * 0.1; // Assuming 10% tax
    const total = subtotal + tax;

    document.getElementById('subtotal-amount').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax-amount').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `$${total.toFixed(2)}`;
}

// Product slider functionality
let currentSlide = 0;
const slidesPerView = 4;

function moveSlider(direction) {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slider-item');
    const totalSlides = slides.length;

    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % (totalSlides - slidesPerView + 1);
    } else {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }

    const translateX = -currentSlide * (100 / slidesPerView);
    sliderContainer.style.transform = `translateX(${translateX}%)`;
}

// Google Maps integration
function initMap() {
    const mapOptions = {
        center: { lat: 40.7128, lng: -74.0060 }, // New York City coordinates (replace with your desired location)
        zoom: 12
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        title: 'LuxeFurniture Store'
    });
}

// Initialize the map when the page loads
window.onload = initMap;

// ... (rest of the JavaScript code remains unchanged) ...

