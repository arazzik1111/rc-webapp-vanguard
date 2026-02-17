import { Element } from 'domhandler';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';
import React, { createElement, FC, Fragment, HTMLAttributes, ReactNode, useCallback } from 'react';

export interface Props {
  children: TagMap;
  html: string;
  acceptUnknown?: boolean;
}

export type TagMap = {
  [tag in keyof Partial<React.JSX.IntrinsicElements>]: FC<React.JSX.IntrinsicElements[tag]> | null;
};

const HtmlMapper: FC<Props> = ({ children: tagMap, html, acceptUnknown }) => {
  const render = useCallback(
    <N extends keyof React.JSX.IntrinsicElements, A = React.JSX.IntrinsicElements[N]>(
      name: N,
      props: A,
      index: number,
      children: ReactNode,
    ) => {
      // Ensure 'name' is always treated as a string here, might need additional validation
      if (!name || typeof name !== 'string') {
        return <Fragment key={index}>{children}</Fragment>;
      }

      const Renderer = tagMap[name] as FC<A & { index: number }> | null | undefined;

      // eslint-disable-next-line react/no-children-prop
      const defaultRenderer = () => createElement(name, { ...props, children, key: index });

      if (Renderer === null) {
        return defaultRenderer();
      }

      if (typeof Renderer === 'undefined') {
        return acceptUnknown ? defaultRenderer() : null;
      }

      return (
        <Renderer {...props} index={index} key={index}>
          {children}
        </Renderer>
      );
    },
    [acceptUnknown, tagMap],
  );

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        const name = domNode.tagName.toLowerCase() as keyof React.JSX.IntrinsicElements;
        const props = { ...domNode.attribs };
        const children = domToReact(domNode.children, options);
        return render(name, props, Math.random(), children); // Using Math.random() for key, consider a more stable key for production
      }
    },
  };

  return <>{parse(html, options)}</>;
};

export default HtmlMapper;

/**
 * Sanitize and encode all HTML in a user-submitted string
 * https://portswigger.net/web-security/cross-site-scripting/preventing
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
export const sanitizeHTML = function (str: string | []): { children: any } {
  if (!str) return { children: <></> };

  if (typeof str !== 'string') {
    return str as any;
  }

  return {
    children: (
      <HtmlMapper html={str}>
        {{
          br: (props) => <br />,
          b: (props) => <b {...props} />,
          em: (props) => <em {...props} />,
          link: (props: HTMLAttributes<HTMLLinkElement>) => <link {...props} />,
          span: (props) => <span {...props} />,
        }}
      </HtmlMapper>
    ),
  };
};
