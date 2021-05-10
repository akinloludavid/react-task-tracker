import Header from "./components/Header"
import Tasks from "./components/Tasks"
import {useState} from "react"
import "./index.css"
const tasks = [{
    id: 1,
    text: "Footbal Match",
    day: "Feb 5th, 2020",
    reminder: true

  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th 2021",
    reminder: true
  },
  {
    id: 3,
    text: 'Food shopping',
    day: "March 4th, 2021",
    reminder: false
  }
]
function App() {
  const [agenda, setAgenda] = useState(tasks)
  const deleteTask = (id) =>{
    let task = tasks.find()
  }
  return (
    <div className="container">
      <Header/>
      <Tasks tasks = {tasks} />
    </div>
  );
}

export default App;
