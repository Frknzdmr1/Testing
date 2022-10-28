import { useEffect } from "react";
import { useState } from "react"

const useFetch = (url, options) => { 

  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => { 
    fetchData();
  }, [])


  const fetchData= async() => { 
    try { 
      const res = await fetch(url, options);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch(err) {
      setError(err);
      setIsLoading(false)
    }
  }

  return [data, loading, error]
}

export default useFetch;