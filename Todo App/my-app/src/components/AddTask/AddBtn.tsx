import styled from "styled-components";
import { addButton } from "../../interfaces/interface";
const Button = styled.button`
  outline: 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    rgba(76, 109, 92, 1) 0%,
    rgba(48, 104, 68, 1) 52%,
    rgba(27, 128, 53, 1) 100%
  );
  font-size: 20px;
  transition: ease-in 0.5s;
  padding: 1.2rem 2rem;
  &:hover {
    background: green;
    margin: 0.2rem 0.5rem;
    padding: 1rem 1.5rem;
    color: white;
    cursor: pointer;
  }
`;
const AddBtn = (props: addButton): JSX.Element => {
  const { setModal } = props;
  const handleOnClick = () => {
    setModal(0);
  };
  return <Button onClick={handleOnClick}>AddBtn</Button>;
};
export default AddBtn;
