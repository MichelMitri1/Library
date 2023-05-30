import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Ratings = ({ rating }) => {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <StarIcon key={index} />
      ))}
      {!Number.isInteger(rating) && <StarHalfIcon />}
    </div>
  );
};

export default Ratings;
