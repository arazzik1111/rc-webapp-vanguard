import { rcWindow } from '@stores/window.store';

export const isInEmbededEnv = () => {
  // TODOOOO: CHECK If the is correct
  return rcWindow['react_app']?.is_auth || rcWindow['reputation_widget_env_config']?.is_auth;
};

export const getBundleBuildFolder = () => {
  return rcWindow['reputation_widget_env_config']?.build_folder ?? rcWindow['react_app']?.build_folder ?? 'app-build';
};

export const getAssetsBasePath = () => {
  return rcWindow['reputation_widget_env_config']?.base_path ?? '';
};

export const getPublicWidgetScriptBasePath = () => {
  const hostname = window.location.hostname;

  if (hostname.includes('.dev.rankingcoach')) {
    return hostname;
  } else if (hostname.includes('testing.rankingcoach')) {
    return 'testing.widg3t.io';
  } else {
    return 'widg3t.io';
  }
};
