import React, { useState } from "react";
import styles from "./TaskList.module.css";
import Card from "../UI/Card";
import DeleteIcon from "@material-ui/icons/Delete";

const TaskList = (props) => {
  const [checkbox, setCheckbox] = useState(false);
  const handleClick = (event) => {
    setCheckbox(event.target.checked);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    // console.log(event);
    props.onDeleteTask(event.target.parentElement.parentElement.innerText);
  };

  return (
    <Card className={styles.tasklist}>
      <div>
        <label>
          <input type="checkbox" onChange={handleClick} />
          <span className={checkbox ? styles.crosstext : null}>
            {props.task}
          </span>
          <button type="submit" onClick={handleDelete}>
            <DeleteIcon />
          </button>
        </label>
      </div>
    </Card>
  );
};

export default TaskList;
