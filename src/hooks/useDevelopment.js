import { useEffect, useState } from "react"

const useDevelopment= () => {
  const [development, setDevelopment] = useState ([]);
  
  useEffect(() =>{
    fetch('development.json')
      .then(res => res.json())
      .then(data => setDevelopment(data));
    
  }, []);
  return [development, setDevelopment]
}

export default useDevelopment;