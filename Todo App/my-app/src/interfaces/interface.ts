export type addButton={
    setModal:React.Dispatch<React.SetStateAction<number>>;
};
export type modalChange={
    setModal: (x:number) => void;
    taskList : todoData[];
    setTaskList : React.Dispatch<React.SetStateAction<todoData[]>>;
    modal : number;
    localStorage: string;
}
export type todoData={
    key:number;
    title:string;
    body:string;
    type:number;
    status: number
}
export type sideBarActions = {
    menuStatus : boolean;
    setMenuStatus: React.Dispatch<React.SetStateAction<boolean>>
  }