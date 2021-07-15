const { createLogger, transports, format } = require("winston");
const { combine, colorize, label, timestamp, printf, simple, json } = format;

const printFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level} : ${info.message}`
});
// const printFormat = format.printf(( timestamp, label, level, message ) => {
//   return `${timestamp} [${label}] ${level} : ${message}`
// });

const printLogFormat = combine(
  label({
    label: "Backend"
  }),
  colorize(),
  timestamp({
    format: "YYYY-MM-DD HH:mm:dd"
  }),
  printFormat
);

const logger = createLogger({
  transports: [
    new transports.Console({
      level: "info",
      format: printLogFormat
    })
  ]
});

module.exports = logger;