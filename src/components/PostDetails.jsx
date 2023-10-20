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

  console.log(comments);
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => closeModal(null)}></div>
      <div className="modal-content">
        <div className="box">
          <div className="notification is-warning is-light">
            <h1 className="title is-3">{selectedPost.title.toUpperCase()}</h1>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={() => closeModal(null)}
            ></button>
            <p>{selectedPost.body}</p>
            <hr className="my-5" />
          </div>
          {comments.length > 0 ? (
            <h2 className="subtitle is-3">
              <strong>Comments</strong>
            </h2>
          ) : (
            <h2 className="subtitle is-3">
              <strong>No comments yet</strong>
            </h2>
          )}

          <hr className="my-2" />
          {comments.map((comment, index) => (
            <div key={index} className="box">
              <p className="subtitle is-5">{comment.email}</p>
              <hr className="my-3" />
              <p>{comment.body}</p>
              {index !== comments.length - 1 && <hr className="my-2" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
