// Utility: read cart from localStorage or return empty object
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : {};
}

// Utility: save cart to localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart count display in header
function updateCartCount() {
  const cart = getCart();
  let count = 0;
  for (const id in cart) {
    count += cart[id].quantity;
  }
  document.getElementById('cart-count').textContent = count;
}

// Render cart table
function renderCart() {
  const cart = getCart();
  const tbody = document.querySelector('#cart-table tbody');
  tbody.innerHTML = '';
  let total = 0;

  Object.values(cart).forEach(item => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = `€${item.price.toFixed(2)}`;
    row.appendChild(priceCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = item.quantity;
    row.appendChild(quantityCell);

    const totalPrice = item.price * item.quantity;
    total += totalPrice;
    const totalCell = document.createElement('td');
    totalCell.textContent = `€${totalPrice.toFixed(2)}`;
    row.appendChild(totalCell);

    const actionsCell = document.createElement('td');
    actionsCell.className = 'cart-actions';

    const incButton = document.createElement('button');
    incButton.textContent = '+';
    incButton.addEventListener('click', () => {
      updateQuantity(item.id, item.quantity + 1);
    });
    actionsCell.appendChild(incButton);

    const decButton = document.createElement('button');
    decButton.textContent = '-';
    decButton.addEventListener('click', () => {
      updateQuantity(item.id, item.quantity - 1);
    });
    actionsCell.appendChild(decButton);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove';
    removeButton.addEventListener('click', () => {
      removeItem(item.id);
    });
    actionsCell.appendChild(removeButton);

    row.appendChild(actionsCell);
    tbody.appendChild(row);
  });

  document.getElementById('total-price').textContent = `Total: €${total.toFixed(2)}`;
}

function updateQuantity(id, newQuantity) {
  const cart = getCart();
  if (cart[id]) {
    if (newQuantity <= 0) {
      delete cart[id];
    } else {
      cart[id].quantity = newQuantity;
    }
    saveCart(cart);
    updateCartCount();
    renderCart();
  }
}

function removeItem(id) {
  const cart = getCart();
  if (cart[id]) {
    delete cart[id];
    saveCart(cart);
    updateCartCount();
    renderCart();
  }
}

// Initialize page
updateCartCount();
renderCart();
