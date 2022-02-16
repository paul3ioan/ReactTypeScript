import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 15vh;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(28, 28, 31, 1) 0%,
    rgba(48, 48, 104, 1) 52%,
    rgba(25, 43, 46, 1) 100%
  );
  color: white;
  opacity: 1;
  z-index: 10;
`;
export const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 2.5px;
  align-self: center;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
`;
