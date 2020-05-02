# covid19zc-backend

## Installation guide
- Clone this repository to your working enviroment.
- Open a terminal and `cd` to the folder where you've cloned the repository.
- Execute `npm install`.
- Execute `npm run build`.
- Done!

## Local Development Usage
- To run the development server, execute `npm run develop`.
- To access the admin panel, go to `ADDRESS/admin` where `ADDRESS` is your server (for local development, it's usually `http://localhost:1337`)

## Production Usage
- Refer [here](https://strapi.io/documentation/3.0.0-beta.x/guides/deployment.html) for deployment.

### API Endpoints
| Method        | Path           | Description  | Parameters | Response
| ------------- |-------------| -----| --- | -- |
| **GET**      | `/cases` | Gets all cases |  | ``` [ { "id": 1, "Case": "ZP01",... } ] ``` |
| **GET**      | `/cases/:id` | Gets specific case  | *id* | ```{ "id": 1, "Case": "ZP01",... }```
| **GET**      | `/figures` | Retrieves current counts of PUIs, PUMs, and confirmed cases in Zamboanga City.  | *id* | ```{ "pui": { "Value": 75, ... }, "pum": { "Value": 2381, ... }, "confirmed": { "value": 5, ... } }```
| **GET**      | `/puis` | Gets all PUI count |  | ``` [ { "id": 1, "Value": 93, "DataUpdatedAt": "2020-04-06T00:00:00Z... }, ... ] ``` |
| **GET**      | `/pums` | Gets all PUM count |  | ``` [ { "id": 1, "Value": 2381, "DataUpdatedAt": "2020-04-06T00:00:00Z... }, ... ] ``` |
| **POST**      | `/auth/local` | Attempts to login the user using the specified credentials. If successful, returns a token and the user's profile.  | *identifier* and *password* | ```{ "jwt": "TOKEN_HERE", "user": {...} }```
