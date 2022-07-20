import PropTypes from 'prop-types';

export const CreditsList = ({ credits }) => {
  return (
    <div>
      <ul>
        {credits.map(credit => {
          return (
            <li key={credit.credit_id}>
              <img
                src={
                  credit.profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + credit.profile_path
                    : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                }
                alt=""
                width="100px"
              />
              <p>{credit.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

CreditsList.propTypes = {
  credits: PropTypes.array.isRequired,
};
