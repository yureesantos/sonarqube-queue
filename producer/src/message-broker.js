const amqp = require('amqplib');
const winston = require('winston');
const { v4: uuidv4 } = require('uuid');

module.exports.start = async () => {
  const connection = await amqp.connect(process.env.MESSAGE_QUEUE);

  const channel = await connection.createChannel();
  await channel.assertQueue('tasks', { durable: true });

  const project = {
    id: 'dasd4a8s9e7198-das123',
    name: 'Projeto Teste2',
    source: 'scanner-test',
    key: uuidv4(),
  };

  await channel.sendToQueue('tasks', Buffer.from(JSON.stringify(project)), {
    contentType: 'application/json',
    persistent: true,
  });

  winston.info(`MSG ENVIADA`);

  setTimeout(() => {
    connection.close();
  }, 3000);
};
