import { useEffect, useRef } from "react";

export const usePerformanceMonitor = (componentName) => {
  const renderCount = useRef(0);
  const startTime = useRef(performance.now());

  useEffect(() => {
    renderCount.current += 1;
    const endTime = performance.now();
    const renderTime = endTime - startTime.current;

    if (process.env.NODE_ENV === "development") {
      console.log(
        `[${componentName}] Render #${renderCount.current} took ${renderTime.toFixed(2)}ms`,
      );
    }

    startTime.current = performance.now();
  });

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log(`[${componentName}] Component mounted`);

      return () => {
        console.log(
          `[${componentName}] Component unmounted after ${renderCount.current} renders`,
        );
      };
    }
  }, [componentName]);

  return { renderCount: renderCount.current };
};

export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();

  if (process.env.NODE_ENV === "development") {
    console.log(`[Performance] ${name} took ${(end - start).toFixed(2)}ms`);
  }

  return result;
};
