// Initialisation du panier
let cart = [];

// Fonction pour ajouter un produit au panier
function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    updateCart();
}

// Mise à jour de l'affichage du panier
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    // Vider la liste actuelle
    cartItems.innerHTML = '';
    
    // Afficher les produits dans le panier
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}€`;
        cartItems.appendChild(li);
    });
    
    // Mettre à jour le nombre d'articles et le total
    cartCount.textContent = cart.length;
    const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
    cartTotal.textContent = `Total : ${total}€`;
}

// Ajouter un événement à tous les boutons "Ajouter au panier"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');
        addToCart(name, price);
    });
});