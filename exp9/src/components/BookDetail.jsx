import { useParams, Link } from "react-router-dom";

function BookDetail({ books }) {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <h2>Book not found!</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      <Link to="/">← Back to Book List</Link>
    </div>
  );
}

export default BookDetail;
