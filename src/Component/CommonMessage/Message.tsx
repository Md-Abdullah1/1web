import React from "react";

function Message(props: any) {
  const { message } = props;
  return (
    <blockquote className="blockquote light-card">
      <p className="txt-danger f-w-500">* {message}</p>
    </blockquote>
  );
}

export default Message;
