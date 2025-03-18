let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");
let cartDisplay = document.querySelector(".cart-display");

let cart = [];
const cartLimit = 5; // Set the limit for the number of products in the cart

function homes() {
    mainPage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    cartDisplay.style.display = "none"; // Hide cart display
    resetNavColors("home");
}

function shops() {
    mainPage.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";
    contact.style.display = "none";
    cartDisplay.style.display = "none"; // Hide cart display
    resetNavColors("shop");
}

function blogs() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    cartDisplay.style.display = "none"; // Hide cart display
    resetNavColors("blog");
}

function abouts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";
    cartDisplay.style.display = "none"; // Hide cart display
    resetNavColors("about");
}

function contacts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
    cartDisplay.style.display = "none"; // Hide cart display
    resetNavColors("contact");
}

function showCart() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    cartDisplay.style.display = "block"; // Show cart display

    updateCart(); // Update cart display
    resetNavColors("cart"); // Set the cart link as active
}

function addToCart(productName, productPrice, productImage) {
    if (cart.length < cartLimit) {
        cart.push({ name: productName, price: productPrice, image: productImage });
        updateCart();
        alert(`${productName} has been added to your cart.`);
    } else {
        alert("Cart limit reached! You can only add up to " + cartLimit + " items.");
    }
}

function removeFromCart(productName) {
    const index = cart.findIndex(item => item.name === productName);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
        alert(`${productName} has been removed from your cart.`);
    } else {
        alert(productName + " is not in the cart.");
    }
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("cart-item");
        li.innerHTML = `<img src="${item.image}" alt="${item.name}" width="50" height="50"> ${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartCount.textContent = `Items in cart: ${cart.length}`;
    cartTotal.textContent = `Total: $${total}`;
}

function resetNavColors(activeLink) {
    const links = ["home", "shop", "blog", "about", "contact","cart"];
    links.forEach(link => {
        document.getElementById(link).style.color = link === activeLink ? "rgb(2, 173, 173)" : "black";
    });
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("cart-item");
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50" height="50"> 
            ${item.name} - $${item.price}
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartCount.textContent = `Items in cart: ${cart.length}`;
    cartTotal.textContent = `Total: $${total}`;
}

