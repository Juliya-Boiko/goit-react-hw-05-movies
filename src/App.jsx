import { getTrending } from 'API/getTrending';
import { getFullInfo } from 'API/getFullInfo';
import { getCredits } from 'API/getCredits';
import { getReviews } from 'API/getReviews';
import { getKeyWord } from 'API/getKeyWord';

export const App = () => {
  getTrending().then(result => {
    // console.dir(result.data.results);
  });

  getFullInfo().then(result => {
    // console.dir(result.data);
  });

  getCredits().then(result => {
    // console.dir(result.data.cast);
  });

  getReviews().then(result => {
    // console.dir(result.data.results);
  });

  getKeyWord().then(result => {
    // console.dir(result.data.results);
  });

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
