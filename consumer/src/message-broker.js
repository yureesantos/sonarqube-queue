const amqp = require('amqplib');
const winston = require('winston');

const messageDelay = require('./message-delay');

module.exports.start = async () => {
  const connection = await amqp.connect(process.env.MESSAGE_QUEUE);

  const channel = await connection.createChannel();
  await channel.assertQueue('tasks', { durable: true });
  await channel.prefetch();

  winston.info('Aguardando envios');

  channel.consume('tasks', async message => {
    await messageDelay(1000);

    const content = message.content.toString();
    const task = JSON.parse(content);

    channel.ack(message);

    winston.info(`${task.message} recebido!`);
  });
};
