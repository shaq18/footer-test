import { useEffect, useState } from 'react';

const useMediaQuery = () => {
  const [is_tSM, setIs_tSM] = useState(false);
  const media_tSM = window.matchMedia('(min-width:768px)');

  useEffect(() => {
    media_tSM.onchange = (e) => {
      if (e.matches) {
        setIs_tSM(true);
      } else {
        setIs_tSM(false);
      }
    };
  }, []);

  return { is_tSM };
};

export default useMediaQuery;
