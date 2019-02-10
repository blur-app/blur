/*
Interfaces of the SQL tables
 */

interface User {
    user_id: number
    uuid: string
    username: string
    password_hash: string
    first_name: string
    last_name: string
    email: string
}

interface Post {
    post_id: number
    post_uuid: string
    user_id: number
    timestamp: string
    host: string
    source: string
}


interface React {
    react_id: number
    name: string
    source: string
}

interface PostReact{
    react_id: number
    user_id: number
    post_id: number
    post_react_id: number
    timestamp: string
}

interface Following{
    follower: number
    followee: number
}

interface oauthCreds{
    client_id: number
    client_secret: string
    user_id: number
    refresh_token: string
    service: string
}