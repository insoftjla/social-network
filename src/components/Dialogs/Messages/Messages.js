import React from "react";
import Dialog from "./Messages.module.css"

const Messages = (props) => {
    return (
        <div className={Dialog.message}>{props.message}</div>
    );
}

export default Messages;