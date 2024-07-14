import { useEffect, useState, RefObject } from "react";

type IntersectionObserverArgs = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const useIntersectionObserver = (
  elementsRef: RefObject<Element>[],
  options?: IntersectionObserverArgs
): boolean[] => {
  const [isIntersecting, setIsIntersecting] = useState<boolean[]>(() =>
    elementsRef.map(() => false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        setIsIntersecting((prevState) => {
          const newState = [...prevState];
          newState[index] = entry.isIntersecting;
          return newState;
        });
      });
    }, options);

    elementsRef.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      elementsRef.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [elementsRef, options]);

  return isIntersecting;
};

export default useIntersectionObserver;
