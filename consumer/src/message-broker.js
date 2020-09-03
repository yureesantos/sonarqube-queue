const amqp = require('amqplib');
const winston = require('winston');

const messageDelay = require('./message-delay');
const scanner = require('./sonarqube-scanner');

module.exports.start = async () => {
  const connection = await amqp.connect(process.env.MESSAGE_QUEUE);

  const channel = await connection.createChannel();
  await channel.assertQueue('tasks', { durable: true });
  await channel.prefetch();

  winston.info('Aguardando envios');

  channel.consume('tasks', async message => {
    try {
      await messageDelay(1000);

      const content = message.content.toString();
      const project = JSON.parse(content);

      await scanner(project);
      // channel.ack(message);

      winston.info(`Mensagem do Producer: ${JSON.stringify(project)}`);
    } catch (err) {
      console.log(err);
      winston.error(`Error: ${err}`);
    }
  });
};
