import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  background-color: white;
  min-height: 100vh;

  @media screen and (min-width: 480px) {
    width: 480px;
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 16px;
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  left: 0;
  margin: 0 auto;
  z-index: 10;
  width: 100%;
  background-color: white;

  > nav {
    display: flex;
  }
  
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  transition: color linear 250ms, background-color linear 250ms;

  &.active {
    color: white;
    background-color: orangered;
    box-shadow: 1px 11px 11px -4px rgba(228, 152, 54, 0.47);
  }
  
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orangered;
  }
`;
