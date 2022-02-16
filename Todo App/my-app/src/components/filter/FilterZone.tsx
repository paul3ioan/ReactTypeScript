import React, { useState } from "react";
import styled from "styled-components";
import "./styles.css";
const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  overflow: hidden;
  justify-content: center;
`;
type prop = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};
const FilterZone = (props: prop) => {
  const { filter, setFilter } = props;
  const [done, setDone] = useState(false);
  const [delet, setDelet] = useState(false);
  const [active, setActive] = useState(false);
  const handleChangeDone = () => {
    if (filter === "done") {
      setFilter("");
      setDone(false);
    } else {
      setFilter("done");
      setDone(true);
      setDelet(false);
      setActive(false);
    }
  };
  const handleChangeActive = () => {
    if (filter === "active") {
      setFilter("");
      setActive(false);
    } else {
      setActive(true);
      setFilter("active");
      setDelet(false);
      setDone(false);
    }
  };
  const handleChangeDelete = () => {
    if (filter === "delete") {
      setFilter("");
      setDelet(false);
    } else {
      setFilter("delete");
      setDelet(true);
      setDone(false);
      setActive(false);
    }
  };
  return (
    <FilterContainer>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="done"
          className="toggle"
          onChange={handleChangeDone}
          checked={done}
        />
        <label htmlFor="done" className="label">
          <div className="ball"></div>
        </label>
        <span className="checkboxes-span">Done</span>
      </div>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="Deleted"
          className="toggle"
          onChange={handleChangeDelete}
          checked={delet}
        />
        <label htmlFor="Deleted" className="label">
          <div className="ball"></div>
        </label>
        <span className="checkboxes-span">Deleted</span>
      </div>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="Active"
          className="toggle"
          onChange={handleChangeActive}
          checked={active}
        />
        <label htmlFor="Active" className="label">
          <div className="ball"></div>
        </label>
        <span className="checkboxes-span">Active</span>
      </div>
    </FilterContainer>
  );
};
export default FilterZone;
