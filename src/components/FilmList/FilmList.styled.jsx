import styled from 'styled-components';

export const MovieTitle = styled.p`
  font-size: 12px;
  font-weight:600;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 10px;
  padding-right: 10px;
  padding: 10px 10px 0 10px;
  text-align: center;
  margin: 0;
`;

export const MovieGanre = styled.div`
  font-size: 12px;
  font-weight: 600;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 10px;
  padding-right: 10px;
  padding: 10px 10px 0 10px;
  text-align: center;
  color: orangered;
  margin: 0;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  list-style: none;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 0;
  justify-content: center;

  img {
    border-radius: 5px;
    display: block;
    height: 300px;
    max-width: 100%;
  }
  
  li {
    background-color: #f1e6db;
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 250ms linear, transform 250ms linear;
    height: 100%;
    width: 200px;
    border-radius: 5px;
    padding-bottom: 10px;
   }

  li:hover {
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);
    transform: scale(1.02);
  }
`;
