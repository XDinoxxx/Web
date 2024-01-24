const winston = require('winston');
const { format, transports } = winston;
const mongoose = require('mongoose');
const MongoDB = require('winston-mongodb').MongoDB;


const Log = mongoose.model('Log', {
  level: String,
  message: String,
  timestamp: Date,
});

const stream = {
    write: (message) => {
      logger.info(message);
    },
  };

const logger = winston.createLogger({
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),

    new transports.MongoDB({
        level: 'info',
        db: mongoose.connection,
        options: {
          collection: 'logs',
          useNewUrlParser: true,  
          useUnifiedTopology: true, 
        },
      }),
  ],
});

logger.info('This is an informational message.');
logger.error('This is an error message.');

module.exports = {
    logger,
    stream
};