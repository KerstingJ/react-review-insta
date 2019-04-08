import React from 'react';
import styled from 'styled-components';

export default function(props) {
    const { post } = props;

    return (
        <Post>

            <div className="header">
                <img className="thumb" src={post.thumbnailUrl} />
                <h3>{post.username}</h3>
            </div>

            <img className="mainImg" src={post.imageUrl} />

            <div className="postFooter">

                <div className="actions">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>

                <div className="likes">
                    <span>Liked by <strong>{post.likes[post.likes.length-1]}</strong> and <strong>{post.likes.length - 1} others</strong></span>
                </div>

                <div className="comments">
                    {post.comments.map(comment => <p key={comment.id}><strong>{comment.username}</strong> {comment.text}</p>)}
                </div>

                <form className="commentForm">
                <input name="newComment" type="text" placeholder="add a comment..."/>
                <button type="submit">Comment</button>
                </form>

            </div>

        </Post>
    )
}

const Post = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;

    border: 1px solid red;

    margin-bottom: 30px;

    .header {
        display: flex;
        align-items: center;

        .thumb {
            width: 50px;
            border-radius: 25px;
            margin: 10px;
        }

        h3 {
            font-size: 1.8rem;
            font-weight: 400;
        }
    }

    .mainImg {
        width: 100%;
        height: auto;
    }

    .postFooter {

        padding: 10px;

        .actions {
            i {
                font-size: 3rem;
                margin: 10px;

                &:first-child {
                    margin-left: 0;
                }
            }
        }

        .likes {
            padding-bottom: 5px;
            border-bottom: 1px solid lightgrey;
            margin-bottom: 5px;
        }

        form {
            width: 100%;

            height: 20px;

            margin-bottom: 10px;

            input {
                min-height: 30px;
                height: 100%;
                width: 75%;

                padding: 10px;

                border: none;

            }

            button {
                min-height: 30px;
                width: 25%;

                padding: 10px;

                border: none;

                background: inherit;
            }
        }
    }

`