import styled from 'styled-components';

export const LoadMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: orangered;
  text-align: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.3);

  transition: box-shadow 250ms linear, scale 250ms linear;

  :hover,
  :focus {
    scale: 1.1;
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);
  }
`;
