import React from 'react';
import classes from './Post.module.css'
const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://m.belfasttelegraph.co.uk/incoming/52372/37700735.ece/AUTOCROP/w300/0347000-_Read-Only_.jpg'></img>
            { props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post