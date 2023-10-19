/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getPostComment } from "../api/api";

const PostDetails = ({ selectedPost, closeModal }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getPostComment(selectedPost.id).then((res) => {
      setComments(res.data);
    });

    return () => {};
  }, [selectedPost]);

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => closeModal(null)}></div>
      <div className="modal-content">
        <div className="box">
          <h1 className="title">{selectedPost.title}</h1>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => closeModal(null)}
          ></button>
          <p>{selectedPost.body}</p>
          <hr />
          <h2 className="subtitle">Comments</h2>
          {comments.map((comment, index) => (
            <div key={index} className="content">
              <p>{comment.body}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
