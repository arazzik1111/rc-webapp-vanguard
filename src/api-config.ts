export enum ActiveEnvs {
  local = 'local',
  dev = 'dev',
  test = 'test',
  prod = 'prod',
}

type ApiConfigType = {
  authBase: string;
  apiBase: string;
  businessProcessorBase: string;
};

export const ApiConfig = (env: ActiveEnvs = ActiveEnvs.dev): ApiConfigType => {
  const activeConfigs: { [key: string]: () => ApiConfigType } = {
    local: (): ApiConfigType => {
      const base = '';

      return {
        authBase: `${base}`,
        apiBase: `${base}`,
        businessProcessorBase: 'https://staging.k8s.rankingcoach.com/arg-business-processor-arango/',
      };
    },
    dev: (): ApiConfigType => {
      const base = '';

      return {
        authBase: `${base}`,
        apiBase: `${base}`,
        businessProcessorBase: 'https://staging.k8s.rankingcoach.com/arg-business-processor-arango/',
      };
    },

    test: (): ApiConfigType => {
      const base = '';

      return {
        authBase: `${base}`,
        apiBase: `${base}`,
        businessProcessorBase: 'https://staging.k8s.rankingcoach.com/arg-business-processor-arango-test/',
      };
    },
  };

  return activeConfigs[env]();
};

export const apiConfig = ApiConfig(ActiveEnvs.dev);

export class EndPoint {
  base: string;
  endPoint: string;

  constructor(endPoint: string, base: string = apiConfig.apiBase) {
    this.base = base;
    this.endPoint = endPoint;
  }

  get(): string {
    return `${this.base}${this.endPoint}`;
  }
}
