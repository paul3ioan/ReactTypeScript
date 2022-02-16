import React, { useEffect, useState } from 'react'
import { todoData } from '../../interfaces/interface';
import {TodoBody,HeaderWrapper,TitleArea,TaskBody,OptionWrapper, ImportanceIcon} from './todoEl'
import AddTaskIcon from '@mui/icons-material/AddTask';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AndroidIcon from '@mui/icons-material/Android';
import AnnouncementIcon from '@mui/icons-material/Announcement';
type prop={
    setModal: (x:number) => void;
    taskList : todoData[];
    setTaskList : React.Dispatch<React.SetStateAction<todoData[]>>;
    modal : number;
    task: todoData;
    Status:number
    localStorage:string
}
const ToDo = (props : prop ) => {
    const {taskList, setTaskList, setModal, modal:id} = props;
    const {title,body,status, type} = props.task;
    const {Status:layoutStatus, localStorage: LocalStorage} = props;
    let task = taskList.find(x => x.key === id)
    const [LayoutStatus, setLayoutStatus] = useState<number>(layoutStatus);
    let globalStatus = LayoutStatus;
    const don = status === 3 ? "rgba(111,205,84,.56)" : "false";
    const delet = status === 2 ? 0.2 : .8;
    const GetImportanceIcon = ()=>{
        switch(type)
        {
            case 1: return <AccessAlarmsIcon sx={{color:'blue'}}/>;
            case 2: return <AndroidIcon sx={{color:'green'}}/>;
            case 3: return <AnnouncementIcon sx={{color:'red'}}/>;
            default: return null;
        }
    }
    const handleTaskDone = () =>{
        if(!task) return;
        globalStatus = task.status = 3; 
        setLayoutStatus(3) 
    }
    const handleTaskDelete = () =>{
        if(!task) return;
        globalStatus = task.status = 2; 
        setLayoutStatus(2)
    }
    const handleEditTask = () =>{
        setModal(id);
        
    }
    useEffect(() =>{
        setTaskList(taskList)
        localStorage.setItem(LocalStorage, JSON.stringify(taskList))
    },[globalStatus])
  return (
    
    <TodoBody don ={don} deleted={delet} >
        <OptionWrapper>
            <AddTaskIcon style={{cursor:"pointer"}} onClick={handleTaskDone}/>
            <EditIcon style={{cursor:"pointer"}} onClick={handleEditTask}/>
            <CancelIcon style={{cursor:"pointer"}} onClick = {handleTaskDelete}/>
        </OptionWrapper>
        <HeaderWrapper>
        <TitleArea>{title}</TitleArea>
        <ImportanceIcon> {GetImportanceIcon()}</ImportanceIcon>
        </HeaderWrapper>
        <TaskBody>{body}</TaskBody>
    </TodoBody>
  )
}

export default ToDo;