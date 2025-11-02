function BookCard({ book }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      margin: "10px auto",
      padding: "15px",
      borderRadius: "8px",
      width: "300px",
      backgroundColor: "#f9f9f9"
    }}>
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
    </div>
  );
}

export default BookCard;
