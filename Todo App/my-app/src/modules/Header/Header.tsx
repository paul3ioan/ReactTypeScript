import React from "react";
import { Container, Title } from "./head";
import { AddBtn, MenuBtn } from "../../components/";
type prop = {
  setModal: React.Dispatch<React.SetStateAction<number>>;
  menuStatus: boolean;
  setMenuStatus: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = (props: prop): JSX.Element => {
  const { setModal } = props;
  const { menuStatus, setMenuStatus } = props;
  return (
    <Container>
      <MenuBtn menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      <Title>ToDo</Title>
      <AddBtn setModal={setModal} />
    </Container>
  );
};
export default Header;
