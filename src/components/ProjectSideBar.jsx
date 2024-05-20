import React from "react";
import Button from "./Button";

function ProjectSideBar({
  onStartProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartProject}> + Add Project</Button>
        <ul className="mt-8">
          {projects.map((projItem) => {
            let cssClasses =
              "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
            if (projItem.id === selectedProjectId) {
              cssClasses += " bg-stone-800 text-stone-200";
            } else cssClasses += " text-stone-400";
            return (
              <li key={projItem.id}>
                <button
                  onClick={() => onSelectProject(projItem.id)}
                  className={cssClasses}
                >
                  {projItem.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default ProjectSideBar;
