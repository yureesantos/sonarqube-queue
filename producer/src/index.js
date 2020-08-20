const winston = require('winston');

const messageBroker = require('./message-broker');

messageBroker.start().catch(err => {
  winston.error(err);
});
