export let cart = [];

export function addToCart(book) {
  // Check if book is already in cart
  const existing = cart.find(item => item.title === book.title);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }

  alert(`${book.title} added to cart!`);
}

export function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function removeFromCart(title) {
  cart = cart.filter(item => item.title !== title);
}
