
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserReview = () => {
  useEffect(() => {
    document.title = "Review | Gadget Heaven";
  }, []);

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(`🎉 Thanks for giving ${rating} star${rating > 1 ? "s" : ""}! 🌟 \n\nReview: "${review}"`, {
      style: { whiteSpace: "pre-line" },
    });

    setReview("");
    setRating(1);
  };

  const shopLocations = [
    { name: "Basement 2, Shop 26, Bashundhara City Shopping Complex", emoji: <i className="fa-solid fa-shop"></i> },
    { name: "Level 6, Block D, Shop 72-73, Bashundhara City Shopping Complex", emoji: <i className="fa-solid fa-shop"></i> },
    { name: "Level 4, Zone A (West Court), Shop 28D, Jamuna Future Park", emoji: <i className="fa-solid fa-shop"></i> },
    { name: "Level 4, Shop 505, Mascot Plaza - Uttara", emoji: <i className="fa-solid fa-shop"></i> },
    { name: "Paris, France", emoji: <i className="fa-solid fa-shop"></i> },
  ];

  return (
    <div
      className="mx-auto py-24 animate__animated animate__fadeIn"
      style={{
        animation: "fade-in 0.5s ease-in-out",
      }}
    >
      <div className="bg-[#6A1B9A] p-8 rounded-lg shadow-lg">
        <h1
          className="text-4xl font-extrabold text-center text-white mb-6"
          style={{ animation: "bounce 2s infinite" }}
        >
          Share Your Review
        </h1>
        <p className="text-xl text-center text-white mb-8">
          Your feedback matters to us! Please let us know how we did.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-xl lg:w-[80%] mx-auto transition-all transform hover:scale-105"
      >
        <div className="mb-6">
          <label htmlFor="rating" className="block text-lg font-medium">
            Rating
          </label>
          <select
            id="rating"
            value={rating}
            onChange={handleRatingChange}
            className="w-full p-4 border rounded-md bg-gray-50 focus:ring-[#6A1B9A] focus:border-[#6A1B9A] transition duration-300 ease-in-out"
          >
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="review" className="block text-lg font-medium">
            Your Review
          </label>
          <textarea
            id="review"
            value={review}
            required
            onChange={handleReviewChange}
            placeholder="Write your review here..."
            rows="6"
            className="w-full p-4 border rounded-md bg-gray-50 focus:ring-[#6A1B9A] focus:border-[#6A1B9A] transition duration-300 ease-in-out"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6A1B9A] text-white p-4 rounded-md hover:bg-[#9C4D97] transition duration-300 ease-in-out transform hover:scale-105"
        >
          Submit Review
        </button>
      </form>

      {/* Shop Locations Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#6A1B9A]">
          Visit Our Shops Worldwide
        </h2>
        <ul className="space-y-4 text-lg text-center">
          {shopLocations.map((location, index) => (
            <li key={index}>
              {location.emoji} {location.name}
            </li>
          ))}
        </ul>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default UserReview;



