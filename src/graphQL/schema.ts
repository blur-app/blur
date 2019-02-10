import graphql, {buildSchema} from "graphql";

const schema: graphql.GraphQLSchema = buildSchema(`
    type Query {
        getUsers: [User],
        getUser(user_id: Int!): User
        
        getAllReacts: [React]
        
        getAllPosts: [Post]
        getNPosts(n: Int!): [Post] 
        
        getAllFollowings: [Following]
        getUserFollowings: [Following]
    }
    
    type Mutation {
        createUser(user_id: String!, username: String!, password_hash: String!, first_name: String!, last_name: String!): String
        createPost(post_id: Int!, uuid: String!, user_id: Int!, content_id: Int!, timestamp: String, host: String!, source: String!): String}
        createOauthCreds(client_id: String!, client_secret: String!, service: String!, user_id: Int): String
        createFollowing(follower: Int!, followee: Int): String
    }
    
    type User {
        user_id: Int,
        uuid: String
        username: String
        password_hash: String
        first_name: String
        last_name: String
        email: String
    }
    
    type Post {
        post_id: Int,
        post_uuid: String
        user_id: Int
        timestamp: String
        host: String
        source: String
    } 
    
    type React {
        react_id: Int
        name: String
        source: String
    }
    
    type Following {
        follower: Int
        followee: Int
    }
`);

export default schema;