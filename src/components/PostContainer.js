import React from 'react';
import styled from 'styled-components';

import Post from './Post.js';

export default function(props) {

    return (
        <PostContainer>
            {props.posts.map(post => <Post key={post.id} post={post} />)}
        </PostContainer>
    )
}

const PostContainer = styled.div`
    padding-top: 100px;
    border: 1px solid red;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`