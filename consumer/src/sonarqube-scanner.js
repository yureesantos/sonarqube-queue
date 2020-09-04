const scanner = require('sonarqube-scanner');

module.exports = async project => {
  try {
    scanner(
      {
        serverUrl: 'http://40.76.53.97:9000',
        options: {
          'sonar.projectName': project.name,
          'sonar.sources': `/usr/src/app/src/${project.source}`,
          'sonar.eslint.reportPaths': 'report.json',
        },
      },
      () => {},
    );
  } catch (err) {
    console.log(err);
  }
};
