import { useParams } from 'react-router-dom';
import { getReviews } from 'api/getReviews';
import { useState, useEffect } from 'react';
import { ReviewsList } from './ReviewsList';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(result => {
      // console.log(result.data.results);
      setReviews(result.data.results);
    });
  }, [movieId]);

  return <div>{reviews && <ReviewsList reviews={reviews} />}</div>;
};

// export default Reviews;
