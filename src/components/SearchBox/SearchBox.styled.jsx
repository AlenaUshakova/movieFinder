import styled from 'styled-components';

export const Forma = styled.form`
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 3px 3px 3px 1px rgba(228, 152, 54, 0.2);
  width: auto;
  font: inherit;
  
  transition: color linear 250ms, box-shadow linear 250ms,
    border-color linear 250ms;

  :hover,
  :focus {
    color: orangered;
    box-shadow: 1px 11px 11px -4px rgba(228, 152, 54, 0.47);
    border-color: orangered;
  }
`;
export const SearchBtn = styled.button`
  margin-left: 10px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
  width: 80px;
  height: auto;
  background-color: transparent;
  color: black;
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  box-shadow: 3px 3px 3px 1px rgba(228, 152, 54, 0.2);

  transition: color linear 250ms,
    box-shadow linear 250ms, background-color linear 250ms,
    border-color linear 250ms;

  :hover {
    color: white;
    background-color: orangered;
    border-color: orangered;
    box-shadow: 1px 11px 11px -4px rgba(228, 152, 54, 0.47);
  }
`;
