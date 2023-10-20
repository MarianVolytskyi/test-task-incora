/* eslint-disable react/prop-types */

import { useState } from "react";
import { deletePosts } from "../api/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PostsList = ({ posts, onSelect, onDelete }) => {
  const [viewAll, setViewAll] = useState(false);
  const handleDeletePost = (postToDelete) => () => {
    const updatedPosts = posts.filter((post) => post.id !== postToDelete.id);

    onDelete(updatedPosts);
    toast.error('Пост був успішно видалений!', { autoClose: 1000,  position: toast.POSITION.TOP_CENTER,});
    return deletePosts(postToDelete.id);
  };

  const displayPost = viewAll ? posts : posts.slice(0, 3);
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Last news</h2>
        {displayPost.map((post) => (
          <div key={post.id} className="box">
            <article className="media" onClick={() => onSelect(post)}>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{post.title.toUpperCase()}</strong>
                    <br />
                    {post.body}
                  </p>
                </div>
              </div>
            </article>
            <button
              className="button is-link is-light m-3"
              onClick={() => onSelect(post)}
            >
              Read post
            </button>
            <button
              className="button is-danger m-3"
              onClick={handleDeletePost(post)}
            >
              Delete post
            </button>
          </div>
        ))}
        <button
          className="button is-success mt-5"
          onClick={() => setViewAll(!viewAll)}
        >
          {viewAll ? "Hide posts" : "View All Feeds"}
        </button>
      </div>
    </section>
  );
};
