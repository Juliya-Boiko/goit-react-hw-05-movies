import styled from 'styled-components';

export const MovieInfoCard = styled.div`
  display: flex;
  max-width: 800px;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.text};
`;

export const MovieInfoPoster = styled.img`
  display: block;
  width: 200px;
  margin-right: 20px;
`;

export const MovieInfoTitle = styled.h3`
  margin-bottom: 10px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.accent};
`;

export const MovieInfoBlock = styled.div`
  margin-bottom: 10px;
  color: ${p => p.theme.colors.text};
`;
