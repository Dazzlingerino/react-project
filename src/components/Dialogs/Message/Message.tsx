import React, { FC } from 'react'
import style from '../Dialogs.module.css'

type Props = {
  message: string
}
const Message: FC<Props> = ({ message }) => {
  return <div className={style.message}>{message}</div>
}

export default Message
