import React from "react";

/** PROP SYSTEM BASICS */
const CommentDetails = (props) => {
  console.log('In react you pass the prop and use it :: it doesnt take objects ???? '  , props)
  return (
    <div className="comments">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.lastUpdated}</span>
        </div>
        <div className="text">Lorem, ipsum.</div>
      </div>
      <div className="show-children">
        {/* Kind of confusing just to show children components */}
        {props.children}
      </div>
      {/* <ApprovalCard author={props.author}/> */}
      
    </div>
  );
};

export default CommentDetails;
