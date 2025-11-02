import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-gray-100 p-6">
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
}

export default App;
