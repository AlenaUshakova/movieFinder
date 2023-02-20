import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

`;

export const ReviewsItem = styled.li`
  border-bottom: 1px dotted orangered;
  font-size: small;
  
  @media screen and (min-width: 768px) {
    font-size: medium;
  }
`;

export const ReviewsAuthor = styled.span`
  color: orangered;
  font-weight: 700;
`;
