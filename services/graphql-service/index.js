const express = require('express');
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const { QueryObjectType, MutationsType } = require('./schema/application.schema');
const app = express();

const rootValue = {
};

let Schema = new GraphQLSchema({
  query: QueryObjectType,
  mutation: MutationsType
});


app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: Schema,
  rootValue,
  graphiql: true,
}));

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');
