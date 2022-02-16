import { useEffect, useState } from "react";
import { modalChange } from "../../interfaces/interface";
import {
  TaskLayout,
  Title,
  Description,
  MainForm,
  MoreInfoAboutTaskWrapper,
  SubmitBtn,
  ImportanceContainer,
} from "./taskEl";
import { ImportanceMenu } from "../";
const TaskZone = (props: modalChange): JSX.Element => {
  const [title, setTitle] = useState("");
  const { setModal, setTaskList, taskList, modal } = props;
  const [body, setBody] = useState("");
  const [type, setType] = useState(0);
  const elemToEdit = taskList.find((x) => x.key === modal);
  useEffect(() => {
    if (elemToEdit === undefined) return;
    setTitle(elemToEdit.title);
    setBody(elemToEdit.body);
    setType(elemToEdit.type);
  }, []);
  const handleSubmit = () => {
    if (modal === 0) {
      var newTask = {
        key: taskList.length + 1,
        title: title,
        body: body,
        status: 1,
        type: type,
      };
      setTaskList([...taskList, newTask]);
      setModal(-1);
    }
    if (elemToEdit === undefined) return;
    elemToEdit.body = body;
    elemToEdit.title = title;
    elemToEdit.type = type;
    setModal(-1);
  };
  const handleChangeTitle = (event: any) => {
    const input: string = event.target.value;
    setTitle(input);
  };
  const handleChangeBody = (event: any) => {
    const input: string = event.target.value;
    setBody(input);
  };
  return (
    <TaskLayout onClick={(e) => e.stopPropagation()}>
      <MainForm>
        <Title
          type="text"
          placeholder="Task name"
          value={title === "" ? "" : title}
          onChange={handleChangeTitle}
        />
        <MoreInfoAboutTaskWrapper>
          <Description
            placeholder="Write some words about this task"
            value={body === "" ? "" : body}
            onChange={handleChangeBody}
          />
          <ImportanceContainer>
            <ImportanceMenu type={type} setType={setType} />
          </ImportanceContainer>
        </MoreInfoAboutTaskWrapper>
        <SubmitBtn onClick={handleSubmit}>Done</SubmitBtn>
      </MainForm>
    </TaskLayout>
  );
};
export default TaskZone;
