import { createUseStyles } from "react-jss";

export const useCommentStyles = createUseStyles({
  commentDetails: {
    border: ({ border }) => `0.5px solid ${border.colorPrimary}`,
    boxShadow: ({ border }) => `1px 2px ${border.shadow}`,
    marginBottom: "1.25rem",
  },
  comment: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  content: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr 2fr 3fr",
    columnGap: "5px",
  },
  contentMetadata: {
    display: "grid",
    gridRow: "1 / 2",
    gridColumn: "1 / 4",
    gridTemplateRows: "subgrid",
    gridTemplateColumns: "subgrid",
    columnGap: "10px",
    textAlign: "center",
  },
  avatar: {
    display: "inline-block",
    gridColumn: "1 / 2",
    padding: "0.85rem",
  },
  author: {
    display: "inline-block",
    gridColumn: "2 / 3",
    padding: "0.85rem",
  },
  date: {
    display: "inline-block",
    gridColumn: "3 / 4",
    padding: "0.85rem",
  },
  contentText: {
    gridColumnStart: "1",
    gridColumnEnd: "4",
    gridRowstart: "2",
    gridRowEnd: "span 2",
    padding: "1.5rem",
  },
});
