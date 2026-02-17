import { isInEmbededEnv } from '@helpers/is-in-embeded-env';

export const isRunOnLocalServer = () => {
  // if it is on localhost ANY port return true

  return !isInEmbededEnv();
  // return window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
};
