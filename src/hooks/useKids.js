import { useEffect, useState } from "react"

const useKids= () => {
  const [kids, setKids] = useState ([]);
  
  useEffect(() =>{
    fetch('kids.json')
      .then(res => res.json())
      .then(data => setKids(data));
    
  }, []);
  return [kids, setKids]
}

export default useKids;