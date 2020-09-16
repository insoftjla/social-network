import React from "react";
import {sendMessage} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        messageData: state.dialogPage.messageData,
        dialogsData: state.dialogPage.dialogsData,
        newMessageText: state.dialogPage.newMessageText
    }
}

const DialogsContainer = connect(mapStateToProps,
    {sendMessage})(Dialogs);

export default DialogsContainer;