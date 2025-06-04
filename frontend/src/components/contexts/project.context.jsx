import { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext([]);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // API REQUEST
      try {
        const response = await fetch("http://localhost:3000/projects");

        if (!response.ok) throw new Error();
        const data = await response.json();

        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

    return () => {};
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};
