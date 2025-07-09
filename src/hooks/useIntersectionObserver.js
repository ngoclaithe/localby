import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);

  return { ref, isIntersecting, hasIntersected };
};

export const useAnimateOnScroll = (options = {}) => {
  const { ref, hasIntersected } = useIntersectionObserver(options);

  return {
    ref,
    className: hasIntersected ? "animate-in" : "",
    style: {
      opacity: hasIntersected ? 1 : 0,
      transform: hasIntersected ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.6s ease, transform 0.6s ease",
    },
  };
};
