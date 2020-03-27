# covid19zc-backend

## Installation guide
- Clone this repository to your working enviroment.
- Open a terminal and `cd` to the folder where you've cloned the repository.
- Execute `npm install`.
- Execute `npm run build`.
- Done!

## Usage
- To run the server, execute `npm run start`.
- To access the admin panel, go [here](http://localhost:1337/admin).

### API Endpoints
| Method        | Path           | Description  | Parameters | Response
| ------------- |-------------| -----| --- | -- |
| **GET**      | `/cases` | Gets all cases |  | ``` [ { "id": 1, "Case": "ZP01",... } ] ``` |
| **GET**      | `/cases/:id` | Gets specific case  | *id* | ```{ "id": 1, "Case": "ZP01",... }```
| **POST**      | `/auth/local` | Attempts to login the user using the specified credentials. If successful, returns a token and the user's profile.  | *identifier* and *password* | ```{ "jwt": "TOKEN_HERE", "user": {...} }```
