import { POSTS_FETCH, POSTS_NEW } from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type: POSTS_FETCH,
            payload: data
        }));
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(data => dispatch({
        type: POSTS_NEW,
        payload: data
    }))
}