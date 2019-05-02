# What's aync-api ?

Everyone who have worked with web-technology understands that how important it is to form API contract. We usually do it by using OpenAPI (Swagger) / Postman. Well, that's well suited for applications that follow client-server model. But recently, with advent of bi-directional communication protocols like websocket, kafka, rabbit-mq etc .. it became increasingly hard to maintain API contracts, owing to their async and bi-directional nature.

Recently, a project inspired from OpenAPI specification was launched to target async-api. Find that [here](https://www.asyncapi.com/).

## Why this project ?

Because I don't like writing one big swagger file in yaml or json. Plus, it removes the scope of programmtic insertion like creating different API contracts as per "dev" or "prod" configuation. 
Also, in this manner I can drop comments to individual payloads to my heart's content, which is not possible with json/yaml, without making it clunky.

The project is made with typescript, hence we get free type-checking.

# Running example

* Clone repo
* Run ``` npm install ```
* Run ``` npm run exec ```

This should create a "build" folder with swagger file inside "html" folder.