import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";
import {Button} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import {makeStyles} from "@material-ui/core/styles";
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
}));
const Dialogs = ({DialogsPage, addMessage}) => {

    let messageElements = DialogsPage.messagesData.map(m => (<Message message={m.message}/>))
    let dialogsElements = DialogsPage.dialogsData.map(d => (
        <DialogItem name={d.name} id={d.id} imgURL={d.imgURL}/>));

    let addNewMessage = (values) => {
        addMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>

    )
}
const maxLength150 = maxLengthCreator(150)
const AddMessageForm = ({handleSubmit}) => {
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='newMessageBody' component={Textarea}
                       validate={[required, maxLength150]}/>
            </div>

            <div className={classes.root}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                > Send Message
                </Button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;