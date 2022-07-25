import { useParams } from 'react-router-dom';
import { getReviews } from 'api/getReviews';
import { useState, useEffect } from 'react';
import { ReviewsList } from './ReviewsList';
import { EmptyReviews } from './ReviewsList.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(result => {
      setReviews(result.data.results);
    });
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 && (
        <EmptyReviews>Sorry, we dont have reviews</EmptyReviews>
      )}
      {reviews.length > 0 && <ReviewsList reviews={reviews} />}
    </div>
  );
};

export default Reviews;
