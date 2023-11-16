import { useEffect,useState } from 'react';

const useWidth = () => {

    const [width, setWidth]=useState(null);
  
    useEffect(() => {
        setWidth(window.innerWidth) ;
    }, []);

  return {width};
};

export default useWidth;