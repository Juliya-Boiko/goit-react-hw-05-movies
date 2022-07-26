import { useParams } from 'react-router-dom';
import { getReviews } from 'api/getReviews';
import { useState, useEffect } from 'react';
import { ReviewsList } from '../../../components/ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(result => {
      setReviews(result.data.results);
    });
  }, [movieId]);

  return <div>{reviews.length > 0 && <ReviewsList reviews={reviews} />}</div>;
};

export default Reviews;
