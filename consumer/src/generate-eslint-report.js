const { CLIEngine } = require('eslint');
const fs = require('fs');

module.exports = async project => {
  const cli = new CLIEngine({
    useEslintrc: true,
    rules: {
      semi: 2,
    },
  });

  const report = cli.executeOnFiles([`/usr/src/app/src/${project.source}/**`]);

  const errorReport = CLIEngine.getErrorResults(report.results);

  fs.writeFileSync(
    `/usr/src/app/src/${project.source}/report.json`,
    JSON.stringify(errorReport),
  );
};
