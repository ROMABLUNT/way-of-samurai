    let rerenderEntireTree = () => {
        console.log('state');
    }

let state = {
    profilePage: {
        posts: [
            {id:1, message: 'post1', likesCount: '4'},
            {id:2, message: 'post2', likesCount: '4'},
            {id:3, message: 'post3', likesCount: '4'},
            {id:4, message: 'post4', likesCount: '4'}
        ],
        newPostText: '1',
        dialogs: [        
            {id:1, name: 'Dimych'},
            {id:2, name: 'Andrew'},
            {id:3, name: 'Sveta'},
            {id:4, name: 'Sasha'}
        ]
    },
    messagePage: {
        messages: [
            {id:1, message: 'Dimych1'},
            {id:2, message: 'Andrew2'},
            {id:3, message: 'Sveta5'},
            {id:4, message: 'Sasha3'}
        ]
    },
    sideBar: {
        friends: [
            {id:1, friend:'Dimych'},
            {id:2, friend:'Sasha'},
            {id:3, friend:'Vitya'},
        ]
    }

};


export const addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
} 

export default state;

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


// store OOP