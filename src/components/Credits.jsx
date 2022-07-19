import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCredits } from 'API/getCredits';
import { CreditsList } from './CreditsList';

export const Credits = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCredits(movieId).then(result => {
      setCredits(result.data.cast);
    });
  }, [movieId]);

  return <div>{credits && <CreditsList credits={credits} />}</div>;
  // console.log(movieId);
};
