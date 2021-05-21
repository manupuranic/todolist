import { useState } from "react";
import styles from "./AddTask.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";
import ErrorModule from "../UI/ErrorModule";

const AddTask = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [error, setError] = useState(false);

  const inputChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (enteredTask.trim().length === 0) {
      setError(true);
      return;
    }
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };

  const clickHandle = () => {
    setError(false);
  };

  return (
    <Card className={styles.container}>
      {error && <ErrorModule clickHandle={clickHandle} />}
      <form onSubmit={addTaskHandler}>
        <input
          type="text"
          id="addtext"
          onChange={inputChangeHandler}
          value={enteredTask}
          autoComplete="off"
          placeholder="Add task..."
        />
        <Button type="submit" className={styles.button}>
          <PostAddRoundedIcon />
        </Button>
      </form>
    </Card>
  );
};

export default AddTask;
