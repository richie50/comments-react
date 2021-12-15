import PropTypes from "prop-types";
import React from "react";
import { useCommentStyles } from "./style";
import { useTheme } from "theming";

const CommentDetails = ({ avatar, author, children, lastUpdated }) => {
  const theme = useTheme();
  const styles = useCommentStyles({ ...theme });

  return (
    <div className={styles.comment}>
      <div className={styles.content}>
        <div className={styles.contentMetadata}>
          <a href="/" className={styles.avatar}>
            <img alt="avatar" src={avatar} />
          </a>
          <a href="/" className={styles.author}>
            {author}
          </a>
          <strong className={styles.date}>{lastUpdated}</strong>
        </div>
        <div className={styles.contentText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
          provident, atque repudiandae quidem eveniet rerum cum doloremque
          aperiam cupiditate impedit dicta vitae, nobis dolores. Adipisci sit
          aliquam veniam fugiat hic. Omnis magni voluptas quis ipsum obcaecati
          rem natus laborum minus facilis ducimus odit reprehenderit officiis
          ratione, culpa quo eos, molestias reiciendis ipsa corporis recusandae
          perferendis. Ratione nostrum iure iste quam.
        </div>
      </div>
      <div className="show-children">{children}</div>
    </div>
  );
};

CommentDetails.propTypes = {
  avatar: PropTypes.string,
  author: PropTypes.string,
  children: PropTypes.object,
  lastUpdated: PropTypes.string,
};
export default CommentDetails;
