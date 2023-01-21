import { useEffect, useRef } from "react";

export function useTimeout(callback: () => void, delay: number) {
  const timeoutRef = useRef<number>();
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current && savedCallback.current();
    timeoutRef.current = window.setTimeout(tick, delay);
    return () => window.clearTimeout(timeoutRef.current);
  }, [delay]);

  return () => window.clearTimeout(timeoutRef.current);
}
