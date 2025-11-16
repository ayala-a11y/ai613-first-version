
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './featurs/tasks/AddTask';
import TasksList from './featurs/tasks/TasksList';
import UpdateTask from './featurs/tasks/UpdateTask';

function App() {




  return <>

    <Link to="/">Tasks List</Link>
    <Link to="/add">Add Task</Link>
    {/* <Link to="/update">update Task</Link> */}


    <Routes>
      <Route path="/" element={<TasksList />} />
      <Route path="/add" element={<AddTask />} />
      <Route path="/update/:id" element={<UpdateTask />} />

    </Routes>
  </>


}

export default App;
