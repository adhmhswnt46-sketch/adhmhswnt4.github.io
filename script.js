// script.js for E-Commerce Functionality

// Sample products data
const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 39.99, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 49.99, image: 'product3.jpg' }
];

// Function to display products
function displayProducts() {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productEl = document.createElement('div');
        productEl.classList.add('product');
        productEl.innerHTML = `
            <h2>${product.name}</h2>
            <img src='${product.image}' alt='${product.name}' />
            <p>Price: $${product.price}</p>
            <button onclick='addToCart(${product.id})'>Add to Cart</button>
        `;
        productContainer.appendChild(productEl);
    });
}

// Cart functionality
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
}

function viewCart() {
    console.log('Cart:', cart);
    // Add more cart display functionality here
}

// Initial call to display products
window.onload = displayProducts;