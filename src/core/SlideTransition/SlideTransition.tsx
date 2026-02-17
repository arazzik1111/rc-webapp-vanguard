import React, { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';

export interface SlideTransitionProps {
  children: React.ReactNode[];
  duration?: number;
  waitBetweenComponents?: number;
  cycle?: boolean;
}

export const SlideTransition: React.FC<SlideTransitionProps> = ({
  children,
  waitBetweenComponents = 2100,
  duration = 350,
  cycle = false,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < children.length) {
          return nextIndex;
        } else {
          clearInterval(interval); // Stop the interval if cycling is false and we've reached the last component
          return prevIndex; // Keep the last index if not cycling
        }
      });
    }, waitBetweenComponents);

    return () => clearInterval(interval);
  }, [children.length, cycle, waitBetweenComponents]); // Add `cycle` to the dependency array

  const transitions = useTransition(index, {
    key: index,
    // from: { opacity: 0, transform: "translateY(100px)", position: "absolute" },
    // enter: { opacity: 1, transform: "translateY(0)" },
    // leave: { opacity: 0, transform: "translateY(100px)" },
    from: { opacity: 0, transform: 'translate3d(0,80px,0)', position: 'absolute', width: '100%' },
    enter: { opacity: 1, transform: 'translate3d(0,0%,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-80px,0)', width: '100%' },
    keys: index, // If using TypeScript, remove or adjust this line as necessary
    config: { duration },
  } as any);

  return (
    <>
      {transitions((style, item, _, i) => (
        <animated.div key={i} style={{ ...style }}>
          {children[item]}
        </animated.div>
      ))}
    </>
  );
};
