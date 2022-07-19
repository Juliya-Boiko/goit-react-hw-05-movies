export const CreditsList = ({ credits }) => {
  // console.log(credits);

  return (
    <div>
      <ul>
        {/* {credits.map(credit => {
          return (
            <li key={credit.credit_id}>
              <img src={credit.profile_path} alt="" />
              <p>{credit.name}</p>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};
