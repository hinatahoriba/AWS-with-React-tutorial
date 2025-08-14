import { useState } from "react";
import Title from "./component/Title";
import Form from "./component/Form";
import List from "./component/List"
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className = "body">
      <Title />
      <Form taskList = {taskList} setTaskList = {setTaskList}/>
      <List taskList = {taskList} setTaskList = {setTaskList}/>
    </div>
  );
}

export default App;
