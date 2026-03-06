// Utility: read cart from localStorage or return empty object
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : {};
}

// Utility: save cart to localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Update the cart count indicator in the header
function updateCartCount() {
  const cart = getCart();
  let count = 0;
  for (const id in cart) {
    count += cart[id].quantity;
  }
  document.getElementById('cart-count').textContent = count;
}

// Render products
function renderProducts(products) {
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    card.appendChild(img);

    const content = document.createElement('div');
    content.className = 'card-content';

    const title = document.createElement('h2');
    title.textContent = product.name;
    content.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = product.description;
    content.appendChild(desc);

    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = `€${product.price.toFixed(2)}`;
    content.appendChild(price);

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.addEventListener('click', () => addToCart(product));
    content.appendChild(button);

    card.appendChild(content);
    list.appendChild(card);
  });
}

// Add product to cart
function addToCart(product) {
  const cart = getCart();
  if (cart[product.id]) {
    cart[product.id].quantity += 1;
  } else {
    cart[product.id] = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    };
  }
  saveCart(cart);
  updateCartCount();
  alert(`${product.name} added to cart!`);
}

// Filter products by search term
function filterProducts(products, term) {
  const lower = term.trim().toLowerCase();
  return products.filter(p => p.name.toLowerCase().includes(lower));
}

// Load products and initialize page
fetch('data/products.json')
  .then(response => response.json())
  .then(products => {
    // Initial render
    renderProducts(products);
    updateCartCount();

    // Search functionality
    const input = document.getElementById('search-input');
    input.addEventListener('input', () => {
      const filtered = filterProducts(products, input.value);
      renderProducts(filtered);
    });
  })
  .catch(err => {
    console.error('Failed to load product data', err);
    const list = document.getElementById('product-list');
    list.innerHTML = '<p>Unable to load products. Start a local server to avoid CORS issues.</p>';
  });
