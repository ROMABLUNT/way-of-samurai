import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> ); 


    let newPostElement = React.createRef();    

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => { 
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
                </div>
                <button onClick={onAddPost}>Add post</button>
                <div className={s.posts}>

                     { postsElements }

                </div>
            </div>
        </div>
    );
};
export default MyPosts;