let initialState = {
    friends: [
        {id:1, friend:'Dimych'},
        {id:2, friend:'Sasha'},
        {id:3, friend:'Vitya'},
    ]
}

const sideBarReducer = (state = initialState , action) => {
    return state;
}  

export default sideBarReducer;