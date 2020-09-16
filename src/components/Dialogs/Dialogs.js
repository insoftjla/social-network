import React from "react";
import DialogCss from "./Dialogs.module.css"
import Messages from "./Messages/Messages";
import DialogItem from "./Dialog/DialogItem";
import {Field, reduxForm} from "redux-form";
import {maxLength50, required} from "../../utils/validator/validator";
import {renderField, Textarea} from "../common/Forms/renderField";


const Dialogs = (props) => {

    let messageTag = props.messageData
        .map(msn => (<Messages message={msn.message} key={msn.id}/>));

    let dialogsTag = props.dialogsData
        .map(dialog => (<DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>));

    let onSendNewMessage = (data) => {
        props.sendMessage(data.text);
    }

    return (
        <div className={DialogCss.dialogs}>
            <div className={DialogCss.dialogItems}>
                {dialogsTag}
            </div>
            <div className={DialogCss.messages}>
                {messageTag}

            </div>
            <MessageFormRedux onSubmit={onSendNewMessage}/>
        </div>
    );
}

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={'text'}
                placeholder='New Message'
                validate={[required, maxLength50]}/>
            <button>
                Send
            </button>
        </form>
    )
}

const MessageFormRedux = reduxForm({form: 'messageForm'})(MessageForm);

export default Dialogs;