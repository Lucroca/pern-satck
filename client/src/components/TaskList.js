import {useEffect,useState} from 'react'
import {Button, Card, CardContent, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'
export default function TaskList() {

  const  navigate = useNavigate();
  const [task, setTask] = useState([]);

  const loadTask = async () => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()
   setTask(data)
  }

    const handleDelete = async (id) => {
      try {
        await fetch(`http://localhost:5000/tasks/${id}`,{
        method: "DELETE",
      })
      setTask(task.filter((task) => task.id !== id))
      } catch (error) {
        console.log(error)
      }
      
    }

  useEffect(() =>{
    loadTask()
  },[])

  return (
    <>
      <h1>Task List</h1>
      {
        task.map((task) => (
          <Card style={{
            marginBottom: '.7rem',
            backgroundColor: '#1e272e'
          }}
          key={task.id}>
            <CardContent style={{
              display: "flex",
              justifyContent:"space-between"
            }}>
              <div style={{
                color:"white"
              }}>
              <Typography>{task.tittle}</Typography> 
              <Typography>{task.description}</Typography>
              </div>
              <div style={{
                color:"white"
              }}>
              <Button variant='contained' color='inherit' onClick={() => navigate (`/tasks/${task.id}/edit`)}>
                Edit
              </Button>
              <Button variant='contained' color='warning' onClick={() => handleDelete(task.id) } style={ {marginLeft: ".5rem"}}>
                Delete
              </Button>
              </div>
            </CardContent>
          </Card>
        ))
      }
    </>
  )
}
