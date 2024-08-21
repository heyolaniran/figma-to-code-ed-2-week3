import { useCallback, useEffect, useState } from "react";

export default function useScroll(thresold : number) {
  const [scroll, setScroll] = useState(false);

  const onScroll = useCallback(() => {
    setScroll(window.screenY > thresold);
  }, [thresold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scroll;
}
