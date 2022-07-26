import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getFullInfo } from 'api/getFullInfo';
import { MovieData, AddListItem } from './MovieDetails.styled';
import { MovieInfoBlock } from '../../components/MovieInfo/MovieInfo.styled';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { BackLink, BackLinkIcon } from 'components/common/BackLink.styled';
import { LoaderSpinner } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const location = useLocation().state?.from ?? '/';

  useEffect(() => {
    getFullInfo(movieId).then(result => {
      setMovieInfo(result.data);
    });
  }, [movieId]);

  return (
    <MovieData>
      <BackLink to={location}>
        <BackLinkIcon />
        Back to movies
      </BackLink>
      {movieInfo && (
        <div>
          <MovieInfo movie={movieInfo} />
          <MovieInfoBlock>Addictional information:</MovieInfoBlock>
          <ul>
            <AddListItem>
              <Link to="credits" state={{ from: location }}>
                Cast
              </Link>
            </AddListItem>
            <AddListItem>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
            </AddListItem>
          </ul>
          <Suspense fallback={<LoaderSpinner />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </MovieData>
  );
};

export default MovieDetails;
