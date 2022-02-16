import { useState } from "react";
import { FilterZone, ToDoList } from "../../components";
import { modalChange } from "../../interfaces/interface";
import { Container, ContentContainer } from "./conten";

const Content = (props: modalChange) => {
  const { taskList, modal, setTaskList, setModal, localStorage } = props;
  const [filter, setFilter] = useState("");

  return (
    <ContentContainer>
      <FilterZone filter={filter} setFilter={setFilter} />

      <Container>
        <ToDoList
          localStorage={localStorage}
          filter={filter}
          setTaskList={setTaskList}
          setModal={setModal}
          taskList={taskList}
          modal={modal}
        />
      </Container>
    </ContentContainer>
  );
};
export default Content;
