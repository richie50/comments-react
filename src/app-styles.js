import { createUseStyles } from "react-jss";

const useAppStyles = createUseStyles({
  heading: {
    display: "flex",
    justifyContent: "center",
    "& h1": {
      color: ({ primary }) => (primary ? primary.textSecondary : "black"),
      margin: "10px auto",
    },
  },
});

export default useAppStyles;
