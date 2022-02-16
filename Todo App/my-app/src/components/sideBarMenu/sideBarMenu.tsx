import React, { useEffect, useState } from "react";
import { todoData } from "../../interfaces/interface";
import { SideBar, TasksStatus, StatusOf, ImportanceSeparator } from "./sidebar";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import FastForwardIcon from "@mui/icons-material/FastForward";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import AndroidIcon from "@mui/icons-material/Android";
import AnnouncementIcon from "@mui/icons-material/Announcement";
type sideBar = {
  menuStatus: boolean;
  setMenuStatus: React.Dispatch<React.SetStateAction<boolean>>;
  list: todoData[];
};
const SideBarMenu = (props: sideBar) => {
  const { menuStatus, setMenuStatus, list } = props;
  const [active, setActive] = useState(0);
  const [delet, setDelet] = useState(0);
  const [done, setDone] = useState(0);
  const [important, setImportant] = useState(0);
  const [urgent, setUrgent] = useState(0);
  const [easy, setEasy] = useState(0);
  const handleMenuClick = () => {
    setMenuStatus(!menuStatus);
  };
  useEffect(() => {
    let active = 0;
    let delet = 0;
    let done = 0;
    let important = 0;
    let urgent = 0;
    let easy = 0;
    list.forEach((element: todoData) => {
      switch (element.status) {
        case 1:
          active++;
          break;
        case 2:
          delet++;
          break;
        case 3:
          done++;
          break;
        default:
          active++;
          break;
      }
      switch (element.type) {
        case 1:
          important++;
          break;
        case 2:
          easy++;
          break;
        case 3:
          urgent++;
          break;
        default:
          break;
      }
    });
    setImportant(important);
    setEasy(easy);
    setUrgent(urgent);
    setActive(active);
    setDelet(delet);
    setDone(done);
  });
  return (
    <>
      {menuStatus === true ? (
        <SideBar>
          {}
          <CancelIcon
            onClick={handleMenuClick}
            fontSize={"large"}
            sx={{ color: "black" }}
          />
          <TasksStatus>
            <StatusOf color={"green"}>
              <DoneAllIcon fontSize="large" sx={{ color: "green" }} /> {done}
            </StatusOf>
            <StatusOf color={"gray"}>
              <FastForwardIcon fontSize="large" sx={{ color: "gray" }} />{" "}
              {active}
            </StatusOf>
            <StatusOf color={"red"}>
              <EmojiEmotionsIcon fontSize="large" sx={{ color: "red" }} />{" "}
              {delet}
            </StatusOf>
            <ImportanceSeparator> Importance:</ImportanceSeparator>
            <StatusOf color={"blue"}>
              <AccessAlarmsIcon fontSize="large" sx={{ color: "blue" }} />{" "}
              {important}
            </StatusOf>
            <StatusOf color={"green"}>
              <AndroidIcon sx={{ color: "green" }} fontSize="large" /> {easy}
            </StatusOf>
            <StatusOf color={"red"}>
              <AnnouncementIcon sx={{ color: "red" }} fontSize="large" />{" "}
              {urgent}
            </StatusOf>
          </TasksStatus>
        </SideBar>
      ) : null}
    </>
  );
};
export default SideBarMenu;
