import { Header, Content } from "./modules/";
import "./App.css";
import { AddTaskArea, SideBarMenu } from "./components/";
import { useEffect, useState } from "react";
import { todoData } from "./interfaces/interface";
function App() {
  const [taskModal, setTaskModal] = useState(-1);
  const LOCAL_STORAGE = "todo.Storage";
  const [list, setList] = useState<todoData[]>([]);
  const [menuStatus, setMenuStatus] = useState(false);

  useEffect(() => {
    const todos = localStorage.getItem(LOCAL_STORAGE);
    if (todos) setList(JSON.parse(todos));
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(list));
  }, [list]);
  return (
    <div className="body">
      {taskModal > -1 ? (
        <AddTaskArea
          localStorage={LOCAL_STORAGE}
          modal={taskModal}
          taskList={list}
          setTaskList={setList}
          setModal={setTaskModal}
        />
      ) : (
        <>
          <Header
            setModal={setTaskModal}
            menuStatus={menuStatus}
            setMenuStatus={setMenuStatus}
          />
          <Content
            localStorage={LOCAL_STORAGE}
            setTaskList={setList}
            taskList={list}
            modal={taskModal}
            setModal={setTaskModal}
          />
        </>
      )}
      {menuStatus === true ? (
        <SideBarMenu
          menuStatus={menuStatus}
          setMenuStatus={setMenuStatus}
          list={list}
        />
      ) : null}
    </div>
  );
}
export default App;
