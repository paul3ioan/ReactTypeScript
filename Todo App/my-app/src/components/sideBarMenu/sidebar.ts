import styled from "styled-components";

export const SideBar = styled.div`
  height: 100vh;
  width: 150px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #f1f1f1;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  @media screen and (max-width: 1000px) {
    width: 100px;
  }
  @media screen and (max-width: 700px) {
    width: 50px;
  }
`;
export const TasksStatus = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
`;
export const StatusOf = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 20px;
  text-align: center;
  color: ${({ color }) => (color ? color : "black")};
  font-weight: 600;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
export const ImportanceSeparator = styled.div`
  font-family: "Roboto";
  font-size: 18px;
  text-decoration: underline;
  text-align: center;
  padding: 0.5rem 0;
  background: rgb(91, 157, 177);
  font-weight: 700;
  background-image: linear-gradient(
    90deg,
    rgba(91, 157, 177, 1) 0%,
    rgba(98, 203, 129, 1) 38%,
    rgba(190, 92, 127, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 100%;
  color: transparent;
  overflow: hidden;
`;
