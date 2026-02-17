import minimist from "minimist";

const system = {
  environment: {
    DEVELOPMENT: "development",
    PRODUCTION: "production",
  },
  buildTime: null,
};

export const getDefaultOptions = () => {
  /**
   * Defaults values for some passed parameters.
   * We don't support default values for every option available
   */
  const optionsAvailable = {
    string: ["file", "environment", "dry-run'"],
    default: {
      environment: system.environment.DEVELOPMENT,
    },
  };
  // eslint-disable-next-line no-undef
  const opts = minimist(process.argv.slice(2), optionsAvailable);

  const shortMaps = {
    f: "file",
    r: "reseller",
    s: "section",
    e: "environment",
    n: "name",
  };
  /**
   * We want to allow shortcut keys for devs
   * so we map for example r form command line to reseller
   *
   * if(opts['r']){
   *  opts['reseller'] = opts['r'];
   *}
   * */
  for (let el in shortMaps) {
    if (opts[el]) {
      opts[shortMaps[el]] = opts[el];
    }
  }

  return opts;
};
