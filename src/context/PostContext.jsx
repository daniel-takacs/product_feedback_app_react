import React, {useState, createContext} from "react"
import Data from '../data.json'

export const PostContext = createContext()

export const PostProvider = ({ children }) => {

    const [post, setPost] = useState(Data.productRequests)

    return (
        <PostContext.Provider value={[post, setPost]}>
            {children}
        </PostContext.Provider>
    )
}


