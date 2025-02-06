import React, { useState } from "react";

import Tableview from "./TableView/tableview";
import Counter from "./Counter/Counter";
const App = () => {
  const [taskItem, setTaskItem] = useState("Task1");
  const TaskItemComponent = {
    Task1:  <Counter />,
    Task2: <Tableview />,
  };
  return (
    <div>
      <div>
        <div>
          <input type="radio" id="task1" checked={taskItem === "Task1"}
            onChange={() => setTaskItem("Task1")} />
          <label htmlFor="task1">Task 1</label>
        </div>
        <div>
          <input type="radio" id="task2" checked={taskItem === "Task2"}
            onChange={() => setTaskItem("Task2")} />
          <label htmlFor="task2">Task 2</label>
        </div>
      </div>
      {TaskItemComponent[taskItem]}
    </div>
  );
};
export default App;