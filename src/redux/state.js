  let state = {
    profilePage: {
        posts: [
            {id:1, message: 'post1', likesCount: '4'},
            {id:2, message: 'post2', likesCount: '4'},
            {id:3, message: 'post3', likesCount: '4'},
            {id:4, message: 'post4', likesCount: '4'}
        ],
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

export default state;