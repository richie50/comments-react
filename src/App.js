import React, { useState } from "react";

import ApprovalForm from "./components/approval-form/ApprovalForm";
import CommentList from "./components/comments/CommentsList";
import Main from "./components/layout/ui/main/Main";
import { addTodo } from "./redux/todoSlice";
import useAppStyles from "./app-styles";
import { useDispatch } from "react-redux";
import { withTheme } from "theming";

const App = (props) => {
  //console.log(props.theme);
  const styles = useAppStyles({ ...props.theme });
  const dispacther = useDispatch();

  const addApprovalHandler = (value) => {
    console.log(value);
    dispacther(addTodo(value));
  };

  return (
    <div>
      <header className={styles.heading}>
        <h1> COMMENTS </h1>
      </header>
      <Main>
        <ApprovalForm addApproval={addApprovalHandler} />
        <CommentList />
      </Main>
    </div>
  );
};

export default withTheme(App);
