import { POSTS_FETCH, POSTS_NEW } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case POSTS_FETCH:
            return {
                ...state,
                items: action.payload
            };
        case POSTS_NEW:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}