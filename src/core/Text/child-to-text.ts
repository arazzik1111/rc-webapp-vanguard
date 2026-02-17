import type { ReactElement, ReactNode } from 'react';
import { Children, isValidElement } from 'react';
import type { ReadonlyDeep } from 'type-fest';

const hasChildren = (
  element: ReadonlyDeep<ReactNode>,
): element is ReactElement<{ children: ReadonlyDeep<ReactNode | ReactNode[]> }> =>
  isValidElement<{ children?: ReadonlyDeep<ReactNode[]> }>(element) && Boolean(element.props.children);

export const childToString = (child?: ReadonlyDeep<ReactNode>): string => {
  if (typeof child === 'undefined' || child === null || typeof child === 'boolean') {
    return '';
  }

  if (JSON.stringify(child) === '{}') {
    return '';
  }
  return (child as number | string).toString();
};

export const childrenAsText = (children: ReadonlyDeep<ReactNode | ReactNode[]>): string => {
  if (!(children instanceof Array) && !isValidElement(children)) {
    return childToString(children);
  }

  return Children.toArray(children).reduce((text: string, child: ReadonlyDeep<ReactNode>): any => {
    let newText = '';

    if (isValidElement(child) && hasChildren(child)) {
      // @ts-ignore
      if (typeof child.type === 'string') {
        newText = `<${child.type}>${childrenAsText(child.props.children)}</${child.type}>`;
      } else {
        console.warn('Some child inside TEXT component is not supported and was stripped', child.type);
        newText = childrenAsText(child.props.children);
      }
    } else if (isValidElement(child) && !hasChildren(child)) {
      newText = '';
    } else {
      newText = childToString(child);
    }
    return text.concat(`${newText}`);
  }, '');
};
