import React, { useEffect } from "react";

import ApprovalCard from "../../ui/approval/ApprovalCard";
import CommentDetails from "./CommentDetails";
import { useCommentStyles } from "./style";
import { useSelector } from "react-redux";
import { useTheme } from "theming";

export const CommentList = () => {
  const theme = useTheme();
  const styles = useCommentStyles({ ...theme });
  const todos = useSelector((state) => {
    return state.todos;
  });
  useEffect(() => {
    console.log("I runned .....");
  }, []);

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo?.id}>
          <div className={styles.commentDetails}>
            <CommentDetails {...todo}>
              <ApprovalCard></ApprovalCard>
            </CommentDetails>
          </div>
        </li>
      ))}
      ;
    </ul>
  );
};

export default CommentList;
