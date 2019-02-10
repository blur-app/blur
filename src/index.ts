import express from 'express';
import express_graphql from 'express-graphql';
import { root, schema } from './graphQL';


// Create an express server and a GraphQL endpoint

const app: express.Application = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));