import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  buttons: {
    border: "none",
    borderRadius: "1.563rem",
    color: ({ primary }) => (primary ? primary.colorPrimary : "black"),
    padding: "0.938rem 2.188rem",
    textDecoration: "none",
    textAlign: "center",
    display: "inline-block",
    margin: "0 auto",
    fontSize: "1em",
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    padding: "1.5rem",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    color: ({ primary }) => (primary ? primary.colorPrimary : "black"),
    fontSize: "1rem",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "0.95rem 0.95rem",
    margin: "10px 10px",
  },
});

export default useStyles;
