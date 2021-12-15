import React from "react";

const ApprovalCard = (props) => {
  console.log(props);
  return (
    <div className="approvals">
      <div className="button-actions">
        <button id="approve" className="generic-buttons">
          Approve
        </button>
        <button id="reject" className="generic-buttons">
          Reject
        </button>
      </div>
    </div>
  );
};

export default ApprovalCard;
