import { useEffect } from "react";
import styled from "styled-components";
import { TaskZone } from "../index";
import { modalChange } from "../../interfaces/interface";
const AddTaskModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 132, 124, 0.5);
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  transition: all 0.4s ease-in-out;
`;

const AddTaskArea = (props: modalChange): JSX.Element => {
  const { setModal, setTaskList, taskList, modal, localStorage } = props;
  const handleOnClick = () => {
    setModal(-1);
  };
  useEffect(() => {
    window.addEventListener("click", handleOnClick);
    return () => {
      window.removeEventListener("click", handleOnClick);
    };
  }, []);
  return (
    <AddTaskModal>
      <TaskZone
        localStorage={localStorage}
        taskList={taskList}
        setTaskList={setTaskList}
        setModal={setModal}
        modal={modal}
      />
    </AddTaskModal>
  );
};
export default AddTaskArea;
