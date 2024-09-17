import { useCallback, useEffect, useRef } from "react";

// 📝 NOTE: https://github.com/sergeyleschev/react-custom-hooks?tab=readme-ov-file#25-usetimeout
export default function useSetTimeout(callback: () => void, delay: number) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }, []);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      callbackRef.current();
      clear();
    }, delay);
  }, [delay, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear, set };
}
