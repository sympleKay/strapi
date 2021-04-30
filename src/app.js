import express from 'express';
import { graphqlHTTP } from 'express-graphql'
import Schema from './schema.js';
import { PORT } from './constants/utils.js';

const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: Schema
}))

app.listen(PORT, () => console.log(`Graphql server running on port ${PORT}`));