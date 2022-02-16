import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, 300px);
  padding: 1rem 0;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  margin-top: 15vh;
  padding: 0 150px;
  width: 100%;
  min-height: 85vh;
  display: flex;
  background: linear-gradient(
    90deg,
    rgba(222, 231, 226, 1) 0%,
    rgba(206, 227, 213, 0.5) 82%,
    rgba(190, 235, 183.6) 100%
  );
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1000px) {
    transition: all 0.4s ease;
    padding: 0 200px;
  }
  @media screen and (max-width: 700px) {
    padding: 0 50px;
  }
`;
export const FilterZone = styled.div`
  display: flex;
  height: 15vh;
  width: 100%;
  background: red;
`;
