import { useEffect, useState } from "react";
import { siteConfig } from "../config/site.js";

export function useFetch(path, errormessage, state) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMesage, setIsErrorMessage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${siteConfig.dburl.host}:${siteConfig.dburl.port}${path}`
        );

        if (!response.ok) throw new Error(errormessage);

        const data = await response.json();

        console.log(data);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setIsErrorMessage(
          "Todos können nicht geladen werden. Komm später wieder!"
        );
        console.log(error.message);
      }
    }

    if (state) {
      fetchData();
      return;
    }
  }, [state]);

  return { isLoading, isError, data, errorMesage };
}
