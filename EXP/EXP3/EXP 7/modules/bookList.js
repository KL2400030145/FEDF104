import { books } from "../data/books.js";
import { addToCart } from "./cart.js";
import { updateCartUI } from "./ui.js";

export function displayBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Price: ₹${book.price}</p>
      <p>Status: ${book.availability}</p>
      <button ${book.availability !== "In Stock" ? "disabled" : ""}>Add to Cart</button>
    `;

    const button = bookDiv.querySelector("button");
    button.addEventListener("click", () => {
      addToCart(book);
      updateCartUI();
      alert(`${book.title} added to cart!`);
    });

    bookList.appendChild(bookDiv);
  });
}
