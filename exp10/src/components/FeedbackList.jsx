import { useSelector } from "react-redux";

const FeedbackList = () => {
  const feedbacks = useSelector((state) => state.feedback);

  return (
    <div className="mt-6 w-96 mx-auto">
      <h3 className="text-lg font-semibold mb-2 text-center">Submitted Feedback</h3>
      {feedbacks.length === 0 ? (
        <p className="text-center text-gray-500">No feedback yet</p>
      ) : (
        <ul className="space-y-3">
          {feedbacks.map((f, index) => (
            <li
              key={index}
              className="p-3 border rounded bg-gray-100 shadow-sm"
            >
              <p><strong>Rating:</strong> {f.rating}</p>
              {f.comment && <p><strong>Comment:</strong> {f.comment}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
