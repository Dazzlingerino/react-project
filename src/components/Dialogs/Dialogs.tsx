import React, { FC } from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Textarea } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { DialogsPropsType } from './DialogsContainer'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      padding: theme.spacing(0),
      marginBottom: theme.spacing(0.5),
      marginTop: theme.spacing(0.5),
    },
  },
  button: {
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
}))

export type NewMessageFormType = {
  newMessageBody: string
}
const Dialogs: FC<DialogsPropsType> = ({ DialogsPage, addMessage }) => {
  let messageElements = DialogsPage.messagesData.map((m) => (
    <Message key={m.id} message={m.message} />
  ))
  let dialogsElements = DialogsPage.dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} imgURL={d.imgURL} />
  ))

  let addNewMessage = (message: NewMessageFormType) => {
    addMessage(message.newMessageBody)
  }

  return (
    <div className={s.dialogs}>
      <div>{dialogsElements}</div>
      <div className={s.messages}>
        {messageElements}

        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  )
}
const maxLength150 = maxLengthCreator(150)

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormType, string>
type OwnProps = {}
const AddMessageForm: FC<
  InjectedFormProps<NewMessageFormType, OwnProps> & OwnProps
> = ({ handleSubmit }) => {
  const classes = useStyles()
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {createField<NewMessageFormValuesKeysType>(
          'Enter message',
          'newMessageBody',
          Textarea,
          undefined,
          [required, maxLength150]
        )}
      </div>

      <div className={classes.root}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          {' '}
          Send Message
        </Button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm<NewMessageFormType>({
  form: 'dialogAddMessageForm',
})(AddMessageForm)
export default Dialogs
