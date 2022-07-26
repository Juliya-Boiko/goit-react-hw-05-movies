import styled from 'styled-components';
import { RiSearchLine } from 'react-icons/ri';

export const SearchFormBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${p => p.theme.colors.text};
  transition: color 250ms ease-in-out;

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const SearchFormBtnIcon = styled(RiSearchLine)`
  width: 25px;
  height: 25px;
`;
