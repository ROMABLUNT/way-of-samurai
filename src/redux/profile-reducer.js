const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
 
let initialState = {
    posts: [
        {id:1, message: 'post1', likesCount: '4'},
        {id:2, message: 'post2', likesCount: '4'},
        {id:3, message: 'post3', likesCount: '4'},
        {id:4, message: 'post4', likesCount: '4'}
    ],
    newPostText: '1',
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        }
        case "UPDATE-NEW-POST-TEXT": {

            return  {
                ...state,
                newPostText: action.newText
            };
            


        }

    
        default:
            return state;
    }
    
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        text: text
    }
);

export default profileReducer;