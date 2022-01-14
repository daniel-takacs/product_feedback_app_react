import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import PostList from '../../components/PostList/PostList'
import './Home.css'

//import { motion } from 'framer-motion/dist/framer-motion'
//import { animation, transition } from '../../animations/index'


function Home() {

  

    return (
            <div className='container'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div>
                <div className='header'>
                    <Header />
                </div>
                <div className='suggestionsList'>
                    <PostList />
                </div>
                </div>
            </div>
    )
}

export default Home
