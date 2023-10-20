import winston from 'winston';

let logger = null;

if (process.env.TEST_ENV !== 'test') {
  logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} [${level.toUpperCase()}]: ${message}`;
      })
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' })
    ]
  });
} else {
  logger = winston.createLogger({
    level: 'none',
    transports: []
  });
}

export default logger;
