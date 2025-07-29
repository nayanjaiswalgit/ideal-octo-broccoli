import { useState } from "react";
import StartRating from "../components/StarRating";

const PollPage = () => {
  const [currentRating, setCurrentRating] = useState<number>(0);

  const handleRatingChange = (newRating: number) => {
    setCurrentRating(newRating);
  };

  return (
    <div>
      <h2>Star Rating</h2>
      <StartRating
        size={5}
        rating={currentRating}
        onChange={handleRatingChange}
      />
      <p>Current Rating: {currentRating}</p>
    </div>
  );
};

export default PollPage;
