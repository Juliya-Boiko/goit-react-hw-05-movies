export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
