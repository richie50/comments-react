import React, { useRef } from "react";

import PropTypes from "prop-types";
import useStyles from "./style";
import { useTheme } from "theming";

const ApprovalForm = ({ addApproval }) => {
  const theme = useTheme();
  const styles = useStyles({ ...theme });
  const inputEl = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const dto = {
      id: Math.random(),
      author: inputEl.current.value,
      avatar: null,
      lastUpdated: new Date().toString(),
    };
    addApproval(dto);
  };

  return (
    <form
      className={styles.container}
      name="approval-form"
      onSubmit={onSubmitHandler}
    >
      <div className={styles.inputContainer}>
        <label className={styles.label}>Name: </label>
        <input
          className={styles.input}
          ref={inputEl}
          type="text"
          value={inputEl.current?.value}
        />
      </div>
      <div>
        <button className={styles.buttons} type="submit">
          Add Approval
        </button>
      </div>
    </form>
  );
};

ApprovalForm.propTypes = {
  addApproval: PropTypes.func,
};

export default ApprovalForm;
