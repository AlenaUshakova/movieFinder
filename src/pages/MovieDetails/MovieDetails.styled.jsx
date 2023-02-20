import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerMovie = styled.div`
  min-height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
`;

export const MovieDetText = styled.div`
  min-width: 280px;

  @media screen and (min-width: 480px) {
    min-width: 350px;
  }

  @media screen and (min-width: 1200px) {
    min-width: 800px;
  }
`;
export const WrapperMovie = styled.div`
  font-weight: 500;
  width: 100%;
  font-size: smaller;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  h3 {
    color: orangered;
  }

  img {
    display: block;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.3);
    height: 500px;
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: medium;
  }
`;

export const MovieList = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
`;

export const MovieLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80px;
  height: 40px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: smaller;
  border: 1px solid grey;
  transition: color linear 250ms;

  &.active {
    color: white;
    background-color: orangered;
    border: none;
    box-shadow: 1px 11px 11px -4px rgba(228, 152, 54, 0.47);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orangered;
  }
`;

export const MovieInfo = styled.div`
  height: auto;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;

export const MovieInfoTitle = styled.h4`
  margin-bottom: 30px;
  color: orangered;
`;

export const MovieTrailer = styled.div`
  margin-top: 20px;
  display: inline-block;
`;
