import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedback } from "../features/feedbackSlice";

const FeedbackForm = () => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) {
      alert("Please select a rating before submitting!");
      return;
    }
    dispatch(addFeedback({ rating, comment }));
    setRating("");
    setComment("");
  };

  return (
    <div className="p-6 bg-white rounded shadow w-96 mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Feedback Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="font-medium">Rating (1 to 5):</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <label className="font-medium">Comment (optional):</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-2 rounded"
          placeholder="Leave your thoughts here..."
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
