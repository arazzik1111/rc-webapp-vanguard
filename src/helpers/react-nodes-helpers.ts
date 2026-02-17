import React, { ReactElement, ReactNode } from 'react';

export const findChildWithId = (element: ReactNode, id: string): ReactElement | null => {
  // If the node is not a valid React element, return null
  if (!React.isValidElement(element)) {
    return null;
  }
  const propsAsAny = element.props as any;
  // Base case: if the current element has the desired id, return a clone of it
  if (element.props && propsAsAny.id === id) {
    return element;
  }
  // Recursive case: If the element has children, iterate over them
  if (propsAsAny && propsAsAny.children) {
    let result: ReactElement | null = null;
    React.Children.forEach(propsAsAny.children, (child) => {
      const childResult = findChildWithId(child, id);
      if (childResult) {
        result = childResult;
      }
    });
    return result;
  }
  return null;
};
