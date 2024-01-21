export const TaskList = ({tasks}) => {
  if(tasks.lenght === 0 ) {
    return <div>There is no tasks.</div>
  }
  
  return (
    <ol>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ol>
  )
}
