import "./TaskDescription.css";

function TaskDescription({ task }) {
  if (!task) return null;

  return (
    <div className="task-description-card">
      <h2 className="poppins-bold">{task.task_title}</h2>
      <p className="poppins-regular">{task.task_description}</p>
    </div>
  );
}

export default TaskDescription;
