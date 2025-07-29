import { useState } from "react";

const StartRating = ({ size = 5, rating, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleStartHover = (hoveredIndex) => {
    setHoverRating(hoveredIndex);
  }
    return (
      <div className="start-rating">
        {Array.from({ length: size }, (_, index) => {
          const startValue = index + 1;
          let starClass = "start";

          if (hoverRating >= startValue) {
            starClass += " hover";
          }
          else if (rating >= startValue) {
            starClass += " active";
          }
          return (
            <span
              className={starClass}
              key={index}
              onClick={() => onChange(startValue)}
              onMouseEnter={() => handleStartHover(startValue)}
              onMouseLeave={() => handleStartHover(0)}
            >
              ★
            </span>
          );
        })}
      </div>
    );
};
export default StartRating;
