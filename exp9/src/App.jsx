import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import BookCard from "./components/BookCard";
import BookDetail from "./components/BookDetail";

function App() {
  const [books] = useState([
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", description: "A journey of dreams.", rating: 4.7 },
    { id: 2, title: "Atomic Habits", author: "James Clear", description: "Build good habits and break bad ones.", rating: 4.9 },
    { id: 3, title: "1984", author: "George Orwell", description: "A dystopian novel about surveillance.", rating: 4.8 },
  ]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>📚 Book Explorer</h1>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              {books.map((book) => (
                <Link
                  key={book.id}
                  to={`/book/${book.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <BookCard book={book} />
                </Link>
              ))}
            </div>
          }
        />
        <Route path="/book/:id" element={<BookDetail books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
