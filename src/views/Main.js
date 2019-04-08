import React, { useEffect } from 'react';

import Header from '../components/Header.js'
import PostContainer from '../components/PostContainer.js'
import data from '../dummy-data.js'

export default function(props){

    // Posts from App
    // Filtered Variation of posts

    if (!props.user){
        props.history.push("/");
    }

    useEffect(() => {
        props.setPosts([...data])
    }, [])

    return (
        <div>  
            <Header username={props.user} />
            <PostContainer posts={props.posts || []} />
        </div>
    )
}

