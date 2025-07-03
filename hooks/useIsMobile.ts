import { useEffect, useState, useCallback } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = useCallback(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(prev => prev !== mobile ? mobile : prev);
  }, []);

  useEffect(() => {
    checkIsMobile();
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIsMobile, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [checkIsMobile]);

  return isMobile;
};
