import React from "react";
import DialogCss from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={DialogCss.dialogItem + ' ' + DialogCss.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;