
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './featurs/tasks/AddTask';
import TasksList from './featurs/tasks/TasksList';

function App() {




  return <>

    <Link to="/">Tasks List</Link>
    <Link to="/add">Add Task</Link>


    <Routes>
      <Route path="/" element={<TasksList />} />
      <Route path="/add" element={<AddTask />} />
    </Routes>
  </>


}

export default App;
