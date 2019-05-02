import { PayloadType } from "../interfaces/async-api.interface";

export const PublisherUpdateCount = {
    deprecated: false,
    summary: "Publisher will produce payload depicting new data is available for pull",
    description: "dede",
    payload: {
        type: PayloadType.object,
        properties: {
            cam_id: {
                description: "id of the camera for which updates are available",
                type: "string"
            },
            user: {
                description: "name of the user",
                type: "string"
            }
        }
    }
}