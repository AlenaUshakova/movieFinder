import styled from 'styled-components';

export const CastConteiner = styled.div`
  padding: 20px 0;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  justify-content: center;
  text-align: center;
  width:100%;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 30px) / 3);
  border: 1px dotted orangered;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 9px;
  height: auto;
  font-weight: 700;

  p {
    margin: 3px 0 0 0;
  }

  @media screen and (min-width: 480px) {
    flex-basis: calc((100% - 40px) / 5);
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 70px) / 8);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 120px) / 13);
  }
`;

export const CastImg = styled.img`
  display: block;
  max-width: 100%;
  height: 120px;

`;

export const FilmHero = styled.span`
  color: orangered;
`;
