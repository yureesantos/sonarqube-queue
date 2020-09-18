const amqp = require('amqplib');
const winston = require('winston');
// const { CLIEngine } = require('eslint');
// const fs = require('fs');

// const eslintReport = require('./generate-eslint-report');
const scanner = require('./sonarqube-scanner');
const getProjectStatus = require('./get-project-status');

module.exports.start = async () => {
  const connection = await amqp.connect(process.env.MESSAGE_QUEUE);

  const channel = await connection.createChannel();
  await channel.assertQueue('tasks', { durable: true });
  await channel.prefetch();

  winston.info('Aguardando envios');

  channel.consume('tasks', async message => {
    try {
      const content = message.content.toString();
      const project = JSON.parse(content);
      // const cli = new CLIEngine({
      //   useEslintrc: true,
      //   rules: {
      //     semi: 2,
      //   },
      // });

      // const report = cli.executeOnFiles([
      //   `/usr/src/app/src/${project.source}/**`,
      // ]);

      // const errorReport = CLIEngine.getErrorResults(report.results);

      // fs.writeFileSync(
      //   `/usr/src/app/src/${project.source}/report.json`,
      //   JSON.stringify(errorReport),
      // );

      // await eslintReport(project);
      await scanner(project);
      // await getProjectStatus(project);

      winston.info(`Response STATUS: ${getProjectStatus}`);

      channel.ack(message);

      winston.info(`Mensagem do Producer: ${JSON.stringify(project)}`);
    } catch (err) {
      winston.error(`Error: ${err}`);
    }
  });
};
