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
    uuid: string
    user_id: number
    content_id: number
    timestamp: string
    host: string
    source: string
}



interface Reacts {
    react_id: number
    name: string
    source: string
}

interface postReacts{
    post_react_id: number
    user_id: number
    post_id: number
    react_id: number
    timestamp: string
}