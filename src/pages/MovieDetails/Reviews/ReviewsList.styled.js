import styled from 'styled-components';

export const ReviewsListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  font-size: 10px;
  color: ${p => p.theme.colors.text};
`;

export const ReviewerName = styled.p`
  color: ${p => p.theme.colors.accent};
`;
