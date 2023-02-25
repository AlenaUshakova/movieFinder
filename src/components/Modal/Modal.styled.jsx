import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 12;
  padding: 0 20px;

`;

export const ModalCont = styled.div`
  width: 100%;
  height: calc(100vw / 16 * 9);

  @media screen and (min-width: 768px) {
    max-width: 1067px;
    max-height: 600px;
  }

`;
