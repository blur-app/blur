import graphql, {buildSchema} from "graphql";

const schema: graphql.GraphQLSchema = buildSchema(`
    type Query {
        getUsers: [User],
        getUser(id: Int!): User
    }
    
    type User {
        user_id: Int,
        username: String,
        first_name: String,
        last_name: String
    }
    
    type Post {
        post_id: Int,
        user_id: Int,
        time_stamp: String
    } 
`);

export default schema;