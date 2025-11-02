import { cart, calculateTotal, removeFromCart } from "./cart.js";

export function updateCartUI() {
  const cartContainer = document.getElementById("cart");
  const totalContainer = document.getElementById("total");

  cartContainer.innerHTML = ""; // clear old content

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalContainer.textContent = "";
    return;
  }

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <p><strong>${item.title}</strong> - ₹${item.price} x ${item.quantity}</p>
      <button class="remove-btn">Remove</button>
    `;
    div.querySelector(".remove-btn").addEventListener("click", () => {
      removeFromCart(item.title);
      updateCartUI();
    });
    cartContainer.appendChild(div);
  });

  const total = calculateTotal();
  totalContainer.textContent = `Total: ₹${total.toFixed(2)}`;
}
