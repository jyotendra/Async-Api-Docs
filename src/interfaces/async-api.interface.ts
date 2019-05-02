import { version } from "winston";

export interface IAsyncApi {
    /**
     * Version of Async API being used
     */
    "asyncapi": string,
    /**
     * Information object of Async API
     */
    "info": IAsyncApiInfo,
    /**
     * Base topic of the conversation. Topics are appended after this base-topic.
     */
    "baseTopic": string,

    /**
     * Endpoints of broker/queue/bus etc..
     */
    "servers": Array<IAsyncApiServerInfo>,

    "topics": {
        [key: string]: {
            "publish"?: IAsyncApiTopicMessage,
            "subscribe"?: IAsyncApiTopicMessage
        }
    }
}

interface IAsyncApiInfo {
    /**
     * Title to be displayed on top of the documentation
     */
    "title": string,
    /**
     * Version of the API document
     */
    "version": string,
    /**
     * URL of company's logo
     */
    "x-logo"?: string,
    /**
     * Description of the API documentation - what this documentation is about.
     */
    "description": string,
    /**
     * Terms of services for using the API documentation
     */
    "termsOfService"?: string
}

interface IAsyncApiServerInfo {
    "url": string,
    "description": string,
    "scheme": SchemeEnums
    "variables"?: {
        [key: string]: {
            /**
             * Default value of the variable, if any.
             */
            "default": string,
            /**
             * Description of the variable that is being used inside the url.
             */
            "description": string
        }
    }
}


export enum SchemeEnums {
    "kafka" = "kafka",
    "kafka-secure" = "kafka-secure",
    "amqp" = "amqp",
    "amqps" = "amqps",
    "mqtt" = "mqtt",
    "mqtts" = "mqtts",
    "secure-mqtt" = "secure-mqtt",
    "ws" = "ws",
    "wss" = "wss",
    "stomp" = "stomp",
    "stomps" = "stomps",
    "jms" = "jms",
    "http" = "http",
    "https" = "https"
}


interface IAsyncApiTopicMessage {
    "deprecated": boolean,
    "summary": string,
    "description": string,
    "tags"?: Array<{ "name": string }>,
    "headers"?: {
        "type": HeaderType,
        "properties": any
    },
    "payload": {
        type: PayloadType,
        properties? : any
    }
}


export enum HeaderType {
    "object" = "object",
    "string" = "string"
}

export enum PayloadType {
    "object" = "object",
    "string" = "string"
}