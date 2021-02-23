import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const basicAuth = (key, secret) => {
    let hash = btoa(key + ":" + secret);
    return "Basic " + hash;
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_API_DOMAIN_URL + url, {
      headers: {
        Authorization: basicAuth(
          process.env.REACT_APP_API_CLIENT_KEY,
          process.env.REACT_APP_API_CLIENT_SECRET
        ),
      },
    })
      .then((res) => {
        console.error(res);
        if (!res.ok) {
          throw Error(
            "Désolée, je n'arrive pas à récupérer les informations demandés"
          );
        }
        return res.json();
      })
      .then((data) => {
        setResponse(data);
        setIsFetching(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsFetching(false);
      });
  }, [url]);

  return {
    isFetching,
    error,
    response,
  };
};

export default useFetch;
