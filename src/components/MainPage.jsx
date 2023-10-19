import { useNavigate } from "react-router-dom";
import { PostsList } from "./PostsList";
import { getPosts, createPosts } from "../api/api";
import { useEffect, useState } from "react";
import PostDetails from "./PostDetails";
import { v4 as uuidv4 } from "uuid";
import ModalCreatePost from "./ModalCreatePost";

function generateNumericId() {
  const uuid = uuidv4();

  const numericString = uuid.replace(/-/g, "").replace(/[^\d]/g, "").slice(2);

  const numericId = parseInt(numericString, 10);
  return numericId;
}

const MainPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [createForm, setCreateForm] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/");
  };

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response.data);
    });

    return () => {};
  }, []);

  const addPost = ({ title, body }) => {
    const newPost = {
      userId: generateNumericId(),
      id: generateNumericId(),
      title,
      body,
    };

    setPosts((curPost) => [newPost, ...curPost]);

    createPosts(newPost);
  };

  return (
    <section className="section ">
      <div className="container is-flex is-justify-content-space-between">
        <h2 className="title is-size-1 is-flex 	"> NEWS TIME</h2>
        <button className="button is-danger mt-2" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="container">
        <button
          className="button is-success mt-5"
          onClick={() => setCreateForm(true)}
        >
          Create post
        </button>
      </div>

      <PostsList posts={posts} onSelect={setSelectedPost} onDelete={setPosts} />

      {selectedPost && (
        <PostDetails selectedPost={selectedPost} closeModal={setSelectedPost} />
      )}

      {createForm && (
        <ModalCreatePost onSubmit={addPost} onClose={() => setCreateForm(false)} />
      )}
    </section>
  );
};

export default MainPage;
