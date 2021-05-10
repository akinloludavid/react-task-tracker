import {FaTimes} from 'react-icons/fa'
 const Task = ({task}) => {
   let styles = {
     color: 'red',
     cursor: 'pointer'
   }
  return (
    <div className = "task">
      <h3>{task.text} <FaTimes style = {styles}/></h3>
      <p>{task.day}</p>
    </div>
  )

  
}
export default Task;