/* eslint-disable react/prop-types */
import { useState } from "react";

const ModalCreatePost = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
    setTitle("");
    setBody("");
    onClose();
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create a New Post</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <section className="modal-card-body">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Body</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Enter body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit">
                  Submit
                </button>
              </div>
              <div className="control">
                <button className="button" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ModalCreatePost;
