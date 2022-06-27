import "./App.css";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const taskNoun = task.length < 1 ? "task" : "tasks";

  return (
    <div className="todoapp stack-large">
      <h1>Todomatic</h1>
      <Form data-testid="app-form" />
      <h2 id="list-heading" data-testid="remaining-task" tabIndex="-1">
        {task.length} {taskNoun} remaining
      </h2>
    </div>
  );
}

export default App;
