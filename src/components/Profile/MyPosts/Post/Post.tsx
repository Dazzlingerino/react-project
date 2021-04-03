import React, { FC } from 'react'
import s from './Post.module.css'

type Props = {
  message: string
  likesCount: number
}
const Post: FC<Props> = ({ message, likesCount }) => {
  return (
    <div className={s.item}>
      <img
        src="https://m.belfasttelegraph.co.uk/incoming/52372/37700735.ece/AUTOCROP/w300/0347000-_Read-Only_.jpg"
        alt={'Empty'}
      />
      <span> {message} </span>
      <div>
        <span>Like {likesCount}</span>
      </div>
    </div>
  )
}
export default Post
