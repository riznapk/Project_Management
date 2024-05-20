import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    //null when new project option is selected
    selectedProject: undefined, //undefined if we are not adding a new project and we havnt selected any current project

    projects: [],
    tasks: [],
  });

  const handleAddTasks = (text) => {
    setProjectState((prevProj) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevProj.selectedProject,
      };
      return {
        ...prevProj,
        tasks: [newTask, ...prevProj.tasks],
      };
    });
  };

  const handleDeleteTasks = (t_id) => {
    setProjectState((prevProj) => {
      return {
        ...prevProj,
        tasks: prevProj.tasks.filter((item) => item.id !== t_id),
      };
    });
  };

  const handleStartAddProject = () => {
    setProjectState((prevProj) => {
      return { ...prevProj, selectedProject: null };
    });
  };

  const handleAddProject = (project) => {
    setProjectState((prevProj) => {
      const newProject = {
        ...project,
        id: Math.random(),
      };

      return {
        ...prevProj,
        selectedProject: undefined,
        projects: [...prevProj.projects, newProject],
      };
    });
  };

  const handleCancel = () => {
    setProjectState((prevProj) => {
      return { ...prevProj, selectedProject: undefined };
    });
  };

  const selectedProject = projectState.projects.find(
    (item) => item?.id === projectState.selectedProject
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDelete}
      onAddTasks={handleAddTasks}
      onDeleteTasks={handleDeleteTasks}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProject === null)
    content = (
      <NewProject
        handleAddProject={handleAddProject}
        handleCancel={handleCancel}
      />
    );
  else if (projectState.selectedProject === undefined)
    content = <NoProjectSelected onStartProject={handleStartAddProject} />;

  console.log("projectState", projectState);

  function handleSelectProject(id) {
    setProjectState((prevProj) => {
      return { ...prevProj, selectedProject: id };
    });
  }

  function handleDelete() {
    setProjectState((prevProj) => {
      return {
        ...prevProj,
        selectedProject: undefined,
        projects: prevProj.projects.filter((item) => {
          item.id !== prevProj.selectedProject;
        }),
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
