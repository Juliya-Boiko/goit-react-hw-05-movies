import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFullInfo } from 'API/getFullInfo';
import { MainContainer } from 'components/common/Container.styled';
import { releaseNormalize, ratingNormalize } from 'utils/utils';
import { Genres } from 'components/Genres';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    getFullInfo(movieId).then(result => {
      // console.log(result.data);
      setMovieInfo(result.data);
    });
  }, [movieId]);

  return (
    <MainContainer>
      {movieInfo && (
        <div>
          <img
            src={
              movieInfo.poster_path
                ? 'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path
                : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
            }
            alt=""
            width="100px"
          />
          <p>
            {movieInfo.title}
            {'  '}
            <span>{releaseNormalize(movieInfo.release_date)}</span>
          </p>
          <p>
            Rating: <span>{ratingNormalize(movieInfo.vote_average)}</span>
          </p>
          <p>Overview:</p>
          <p>{movieInfo.overview}</p>
          <p>Genres</p>
          {<Genres movieGenres={movieInfo.genres} />}
          <p>Addictional information:</p>
          <ul>
            <li>
              <Link to="credits">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </MainContainer>
  );
};
