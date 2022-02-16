import React from "react";
import { todoData } from "../../interfaces/interface";
import { ToDo } from "../";
type ToDoType = {
  setModal: (x: number) => void;
  taskList: todoData[];
  setTaskList: React.Dispatch<React.SetStateAction<todoData[]>>;
  modal: number;
  filter: string;
  localStorage: string;
};
const ToDoList = (props: ToDoType): JSX.Element | null => {
  const { filter, localStorage } = props;
  const { setModal, taskList, setTaskList } = props;
  const chooseTodosToShow = (todo: todoData): boolean => {
    if (filter === "") return true;
    switch (filter) {
      case "done":
        return todo.status === 3;
      case "active":
        return todo.status === 1;
      case "delete":
        return todo.status === 2;
      default:
        return false;
    }
  };
  return (
    <>
      {taskList.length !== undefined
        ? taskList.map((_props: todoData) => {
            if (chooseTodosToShow(_props))
              return (
                <ToDo
                  localStorage={localStorage}
                  key={_props.key}
                  Status={_props.status}
                  task={_props}
                  modal={_props.key}
                  taskList={taskList}
                  setTaskList={setTaskList}
                  setModal={setModal}
                ></ToDo>
              );
            return null;
          })
        : null}
    </>
  );
};
export default ToDoList;
