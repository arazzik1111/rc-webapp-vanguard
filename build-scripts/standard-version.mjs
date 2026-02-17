import standardVersion from "standard-version";
import { getDefaultOptions } from "./helpers/get-default-options.mjs";
import * as readline from "readline";

function askQuestion(query) {
  const rl = readline.createInterface({
    // eslint-disable-next-line no-undef
    input: process.stdin,
    // eslint-disable-next-line no-undef
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    }),
  );
}

// Options are the same as command line, except camelCase
// standardVersion returns a Promise
const options = getDefaultOptions();
const dryRun = options["dry-run"];
const doGenerate = (dryRun) => {
  standardVersion({
    noVerify: true,
    infile: "CHANGELOG.md",
    silent: false,
    dryRun: dryRun,
    commitUrlFormat: "https://bitbucket.org/rankingcoach/rc-webapp-vanguard/commits/{{hash}}",
    compareUrlFormat:
      "https://bitbucket.org/rankingcoach/rc-webapp-vanguard/branches/compare/{{currentTag}}%0D{{previousTag}}#diff",
  })
    .then((data) => {
      // standard-version is done
      console.log(data);
    })
    .catch((err) => {
      console.error(`standard-version failed with message: ${err.message}`);
    });
};

if (dryRun) {
  doGenerate(dryRun);
} else {
  askQuestion("Password?").then((res) => {
    if (res === "asd") {
      doGenerate(false);
    }
  });
}
