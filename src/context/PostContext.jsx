import React, {useState, createContext} from "react"
import Data from '../data.json'

export const PostContext = createContext()

export const PostProvider = ({ children }) => {

    const [posts, setPosts] = useState(Data.productRequests)

    return (
        <PostContext.Provider value={[posts, setPosts]}>
            {children}
        </PostContext.Provider>
    )
}


