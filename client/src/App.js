import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm';
import NavBar from './components/Navbar';
import { Container } from '@mui/material';


export default function App(){
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Container>
      <Routes>
        <Route path='/' element={<TaskList />} />
        <Route path='/tasks/new' element={<TaskForm />}/>
        <Route path="/tasks/:id/edit" element={<TaskForm />}/>
      </Routes>
      </Container>
    </BrowserRouter>
  )
}