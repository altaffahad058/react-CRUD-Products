import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.eventHandler}
      disabled={props.disableButton}
      className={`${props.disableButton ? 'bg-blue-300' : 'bg-blue-600'} px-4 rounded-full text-white`}
    >
      {props.children}
    </button>
  );
}

export default Button;
