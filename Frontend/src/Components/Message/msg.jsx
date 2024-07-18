import React, { useRef } from 'react';

import './msg.css';

const msg = (props) => {

    const msg = useRef();

    const closeMsgbox = ()=>{
        msg.current.style.display = "none";
    }

  return (
    <>
        <div className={props.msgClass} id="msg-box" ref={msg}>
            <strong className="msg-title">{props.title}</strong>
            <span className="msg-text">{props.text}</span>
            <button className="close-msgbox" onClick={closeMsgbox}>Close</button>
        </div>
        {/* <div className={"green"} id="msg-box" ref={msg}>
            <strong className="msg-title">Success</strong>
            <span className="msg-text">Registered successfully.</span>
            <button className="close-msgbox" onClick={closeMsgbox}>Close</button>
        </div>
        <div className={"red"} id="msg-box" ref={msg}>
            <strong className="msg-title">Error</strong>
            <span className="msg-text">User already exists.</span>
            <button className="close-msgbox" onClick={closeMsgbox}>Close</button>
        </div> */}
    </>
  )
}

export default msg;