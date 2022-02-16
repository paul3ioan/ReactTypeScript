import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
const Wrapper = styled.button`
  margin: 1rem 2rem;
  background: transparent;
  color: white;
  border: 0;
  cursor: pointer;
`;
type menuProps = {
  menuStatus: boolean;
  setMenuStatus: React.Dispatch<React.SetStateAction<boolean>>;
};
const MenuBtn = (props: menuProps) => {
  const { menuStatus, setMenuStatus } = props;
  const handleMenuClick = () => {
    setMenuStatus(!menuStatus);
  };
  return (
    <Wrapper>
      <MenuIcon onClick={handleMenuClick} fontSize={"large"} />
    </Wrapper>
  );
};
export default MenuBtn;
