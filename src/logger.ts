import * as winston from "winston";

class WinstonLogger {

    private winstonLogger: winston.Logger;

    constructor() {
        this.winstonLogger = winston.createLogger({
            level: 'info',
            transports: [
              new winston.transports.Console(),
            ]
        })
    }

    public writeLog(msg: string) {
        this.winstonLogger.log("info", msg.toString());
    }
}

export const logger = new WinstonLogger();
