import React from "react";
import useStyles from "./style";
import { useTheme } from "theming";

const Main = ({ children }) => {
  const theme = useTheme();
  const styles = useStyles({ ...theme });

  return <div className={styles.mainContainer}>{children}</div>;
};

export default Main;
