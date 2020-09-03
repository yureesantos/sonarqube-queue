const scanner = require('sonarqube-scanner');

module.exports = async project => {
  console.log('aqui');
  scanner(
    {
      serverUrl: 'http://40.76.53.97:9000',
      options: {
        'sonar.projectName': project.name,
        'sonar.sources': project.source,
        'sonar.eslint.reportPaths': '.eslintrc.json -f json',
      },
    },
    () => console.log('acabou'),
  );
};
