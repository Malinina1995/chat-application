import React from "react";
import {NavLink} from "react-router-dom";

import "./DialogItem.css";

export function DialogItem(props) {
    return (
        <div className="message_dialogs-item">
            <img className="message_dialogs-item-avatar"
                 src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" alt=''/>
            <NavLink to={`/dialogs/${props.path}`}>{props.name}</NavLink>
        </div>
    );
}
