import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCredits } from 'api/getCredits';
import { CastList } from './CastList';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCredits(movieId).then(result => {
      setCredits(result.data.cast);
    });
  }, [movieId]);

  return <div>{credits && <CastList credits={credits} />}</div>;
};

export default Cast;
