import react, { useState, useEffect } from 'react';

export default function useViewport() {
  const [width, setWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window?.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

