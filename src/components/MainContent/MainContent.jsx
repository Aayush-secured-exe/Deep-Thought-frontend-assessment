import "./MainContent.css";
import TaskDescription from "./TaskDescription";
import AssetGrid from "./AssetGrid";
import project from "../../Data/projectData.json";

function MainContent() {
  const task = project.tasks[0];
  console.log(task);

  return (
    <section className="main-content">
      <div className="main-header">
        <h1 className="poppins-bold">{task.assets[0].asset_title}</h1>
        <button className="submit-btn poppins-medium">Submit task</button>
      </div>
      <TaskDescription task={task} />
      <AssetGrid assets={task.assets} />
    </section>
  );
}

export default MainContent;
