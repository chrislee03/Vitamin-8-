import './App.css'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'

function App() {
  return (
    <>
    <div class="container-fluid mt-5"> 
      <h1 class="text-center"> To-do List</h1>
      <TaskForm/>
      <TaskList/>
    </div>
    </>
  )
}

export default App
