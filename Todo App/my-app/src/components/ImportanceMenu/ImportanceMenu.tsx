import React, { useEffect, useState } from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import AndroidIcon from "@mui/icons-material/Android";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import "./style.css";
type ImporanceMenuProps = {
  type: number;
  setType: React.Dispatch<React.SetStateAction<number>>;
};
const ImportanceMenu = (props: ImporanceMenuProps): JSX.Element => {
  const { type, setType } = props;
  const [important, setImportant] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [easy, setEasy] = useState(false);
  const handleChangeImportant = () => {
    setImportant(true);
    setUrgent(false);
    setEasy(false);
    setType(1);
  };
  const handleChangeUrgent = () => {
    setImportant(false);
    setUrgent(true);
    setEasy(false);
    setType(3);
  };
  const handleChangeEasy = () => {
    setImportant(false);
    setUrgent(false);
    setEasy(true);
    setType(2);
  };
  useEffect(() => {
    switch (type) {
      case 1:
        setImportant(true);
        break;
      case 2:
        setEasy(true);
        break;
      case 3:
        setUrgent(true);
        break;
      default:
        return;
    }
  }, [type]);
  return (
    <>
      <div className="icon-container">
        <input
          type="checkbox"
          id="Urgent"
          className="toggle"
          onChange={handleChangeUrgent}
          checked={urgent}
        />
        <label htmlFor="Urgent" className="icon-label">
          <AnnouncementIcon sx={{ color: "red" }} fontSize={"large"} />
          <span className="checkboxes-span">Urgent</span>
        </label>
      </div>
      <div className="icon-container">
        <input
          type="checkbox"
          id="Easy"
          className="toggle"
          onChange={handleChangeEasy}
          checked={easy}
        />
        <label htmlFor="Easy" className="icon-label">
          <AndroidIcon sx={{ color: "green" }} fontSize={"large"} />
          <span className="checkboxes-span">Chill</span>
        </label>
      </div>
      <div className="icon-container">
        <input
          type="checkbox"
          id="Important"
          className="toggle"
          onChange={handleChangeImportant}
          checked={important}
        />
        <label htmlFor="Important" className="icon-label">
          <AccessAlarmsIcon sx={{ color: "blue" }} fontSize={"large"} />
          <span className="checkboxes-span">Should be done</span>
        </label>
      </div>
    </>
  );
};
export default ImportanceMenu;
