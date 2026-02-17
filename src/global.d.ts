declare global {
  interface Window {
    REACT_INLINESVG_CACHE_NAME?: string;
    REACT_INLINESVG_PERSISTENT_CACHE?: boolean;
  }
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.module.scss' {
  const content: { [className: string]: string };
  export = content;
}
