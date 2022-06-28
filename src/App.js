import Form from "./components/Form";
import { useState } from "react";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

var tid = 0;

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App({ data }) {
  const [tasks, setTasks] = useState(data);

  const [filter, setFilter] = useState("All");

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const updatedList = tasks.filter((task) => task.id !== id);
    setTasks(updatedList);
  }

  function editTask(id, newName) {
    const updatedList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(updatedList);
  }

  function addTask(name) {
    tid = tasks.length + 1;
    const newTask = { id: "todo-" + tid, name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const taskList = tasks
    .filter((task) => FILTER_MAP[filter](task))
    .map((task) => (
      <Todo
        name={task.name}
        completed={task.completed}
        id={task.id}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));
  const tasksNoun = taskList.length > 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>Todomatic</h1>
      <Form data-testid="app-form" addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading" data-testid="remaining-task" tabIndex="-1">
        {headingText}
      </h2>
      <div
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </div>
    </div>
  );
}

export default App;
