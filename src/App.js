import TaskList from "./Components/Tasks/TaskList";
import AddTask from "./Components/Tasks/AddTask";
import { useState, Fragment } from "react";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (newTask) => {
    setTaskList((prevTasks) => [
      ...prevTasks,
      { task: newTask, id: Math.random().toString() },
    ]);
  };

  const deleteTaskHandler = (deleteTask) => {
    setTaskList(taskList.filter((task) => task.task !== deleteTask));
  };

  return (
    <Fragment>
      <AddTask onAddTask={addTaskHandler} />
      {taskList.map((task) => (
        <TaskList
          task={task.task}
          key={task.id}
          onDeleteTask={deleteTaskHandler}
        />
      ))}
    </Fragment>
  );
};

export default App;
