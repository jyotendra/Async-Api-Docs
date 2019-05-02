import { safeDump } from "js-yaml";
import { logger } from "./logger";
import { writeFile } from "fs";
import * as path from "path";
import { IAsyncApi, SchemeEnums, HeaderType, PayloadType } from "./interfaces/async-api.interface";
import { PublisherUpdateCount } from './update-count/publisher';


export const base: IAsyncApi = {
    asyncapi: "1.2.0",
    info: {
        title: "Async API trial",
        version: "1.0.0",
        description: "Async API documentation for Kafka",
    },
    baseTopic: "bitvivid",
    servers: [
        {
            url: "192.168.1.1:5000",
            description: "Connect to the endpoints using kafka",
            scheme: SchemeEnums.kafka
        }
    ],

    topics: {
        "bitvivid.update-count": {
            publish: PublisherUpdateCount
        }
    }
};


const my_yaml = safeDump(base);
const main_directory = __dirname;
const api_docs_file = path.join(main_directory, "..", "api.yaml");

writeFile(api_docs_file, my_yaml, err => {
    if (err) {
        logger.writeLog("Failed to produce yaml --- " + err);
    }
});

