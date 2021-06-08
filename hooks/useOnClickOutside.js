import { useEffect, useRef } from "react";

export default function useOnClickOutside(refs, handler) {
  const savedHandler = useRef();
  const savedRefs = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    savedRefs.current = refs;
  }, [refs]);

  useEffect(() => {
    const listener = (event) => {
      if (
        Array.isArray(savedRefs.current) &&
        savedRefs.current.every(
          (r) => r.current && !r.current.contains(event.target)
        )
      ) {
        savedHandler.current(event);
        return;
      }

      if (
        savedRefs.current.current &&
        !savedRefs.current.current.contains(event.target)
      ) {
        savedHandler.current(event);
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);
}
