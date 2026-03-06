# E‑Commerce Sandbox

This sandbox provides a minimal online‑shop example that you can run locally to practice working with
 e‑commerce concepts.  It models core features found in large online marketplaces such as Otto,
 Kaufland or Amazon, but in a simple and easy‑to‑understand way.  The sandbox consists of
 a static front‑end written in HTML/JavaScript and a tiny JSON data store.  It does **not** implement
 payment processing or user authentication—those are outside the scope of this exercise.

## Features

* **Product catalog:**  Sample products are defined in `data/products.json`.  Each item has an
  identifier, a name, a price, a description and a placeholder image.  When the home page loads
  it fetches this JSON and renders a card for each product.  You can add more products or
  change existing ones to experiment.

* **Search filter:**  A search box on the home page allows you to filter the catalog by name.

* **Shopping cart:**  Clicking **Add to Cart** on a product stores it in the cart using
  `localStorage`.  The cart page reads from `localStorage` and displays all items with
  quantities, prices and totals.  You can increase or decrease the quantity of each item or
  remove it entirely.  Cart totals update automatically.

* **Static assets:**  The site is fully static and does not require a server—opening
  `index.html` in your browser is sufficient.  However, due to browser security restrictions,
  the product JSON may not load when opening files directly.  For best results, start a simple
  HTTP server and navigate to `http://localhost:8000`.

## Getting started

1. Open a terminal in the `ecommerce‑sandbox` directory.
2. Start a tiny web server.  If you have Python installed, you can run:

   ```bash
   python3 -m http.server 8000
   ```

   This command serves all files in the current directory on port 8000.  You can also use
   Node.js or another HTTP server if you prefer.

3. Open `http://localhost:8000/index.html` in your web browser.  The home page will display
   the product catalog.  Click on any item’s **Add to Cart** button to add it to your cart.
   Use the **Cart** link in the top right corner to view or modify your cart.

### Customizing the catalog

* To add or edit products, open `data/products.json` and modify the JSON objects.  Fields are
  self‑explanatory.  If you want to use images, you can replace the placeholder URL with
  another image URL or save a local image in the `img/` folder (you will need to create
  the folder and update the path accordingly).

* To change the styling, edit the CSS rules in `css/styles.css`.  You can experiment with
  colors, fonts, layouts and animations.

### Extending the sandbox

This sandbox is intentionally minimal.  Here are some ideas for additional practice:

* **User accounts:**  Add a login form and store user profiles in `localStorage` or a
  lightweight backend.  Associate carts with users and persist order history.
* **Order confirmation flow:**  Implement a checkout page that collects shipping details,
  calculates taxes and shows a summary before “placing” the order.  Since real payment
  processing is out of scope, you can simulate success messages.
* **Backend API:**  Replace the static JSON with a small API built using Node.js/Express,
  Flask or Django.  Create endpoints for products, carts and orders and store data in a
  database (e.g., SQLite or MongoDB) for a more realistic experience.

## References

* An e‑commerce system provides a digital storefront where customers can browse products,
  add items to a cart and complete purchases.  Critical features include product search,
  authentication, order management, inventory updates and payment processing【108173438447251†L169-L213】.
* Choosing the right architecture (two‑tier, three‑tier or microservices) ensures that your
  website remains scalable and easy to maintain【844559630190108†L786-L899】.  For small
  experiments and prototypes, a two‑tier or three‑tier setup is often enough, while large
  enterprises adopt microservices to decouple responsibilities.
* Key e‑commerce software features include an online shopping cart, product/inventory
  management, secure payment processing and additional features like order and customer
  management and marketing tools【372817381597710†L125-L133】.
