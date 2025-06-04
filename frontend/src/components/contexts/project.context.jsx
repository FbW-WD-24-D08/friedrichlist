import { createContext, useEffect, useState } from "react";
import { siteConfig } from "../../config/site.js";

export const ProjectContext = createContext([]);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // API REQUEST
      try {
        const response = await fetch(
          `${siteConfig.dburl.host}:${siteConfig.dburl.port}/projects`
        );

        if (!response.ok) throw new Error();
        const data = await response.json();

        setProjects(data);

        new Promise((resolve) => {
          setTimeout(() => {
            setIsLoading(false);
            resolve();
          }, 1000);
        });
      } catch (error) {
        console.log("Error ", error);
        new Promise((resolve) => {
          setTimeout(() => {
            setIsLoading(false);
            setIsError(true);
            resolve();
          }, 1000);
        });
      }
    }
    fetchData();

    return () => {};
  }, []);

  return (
    <ProjectContext.Provider
      value={{ projects, setProjects, isLoading, isError }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
