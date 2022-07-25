import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const LoaderSpinner = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </LoaderContainer>
  );
};
