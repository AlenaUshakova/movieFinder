import styled from 'styled-components';

export const HomeMain = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left:20px;
  padding-right: 20px;
  font-size: small;
  text-align:center;
  
  @media screen and (min-width: 480px) {
    font-size: medium;
  }
`;

export const HomeTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: orangered;
  margin: 0;
  margin-bottom: 50px;
`;
