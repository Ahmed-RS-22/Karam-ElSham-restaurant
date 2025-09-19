import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-6xl font-extrabold text-red-600">404</h1>
      <p className="mt-4 text-lg text-gray-700">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default Error;
