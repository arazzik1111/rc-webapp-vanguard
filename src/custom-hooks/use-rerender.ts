import { useEffect, useState } from 'react';

export const useRerender = (values?: any[]) => {
  const [value, setValue] = useState({});

  useEffect(() => {
    setValue({});
    //console.log("rendering");
  }, [values]);

  return () => {
    setValue({});
  };
};
