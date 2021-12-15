import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  color: ({ primary }) => (primary ? primary.primaryColor : "black"),
});

export default useStyles;
