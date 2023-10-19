import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = () => api.get("/users");
export const getPosts = () => api.get("/posts");
export const createPosts = (data) => api.post("/posts", data);
export const deletePosts = (postId) => api.delete(`/posts/${postId}`);

export const getAlbums = () => api.get("/albums");
export const getUsersPosts = (userId) => api.get(`/users/${userId}/posts`);
export const getPostComment = (postId) => api.get(`/posts/${postId}/comments`);
export const getUsersAlbum = (userId) => api.get(`/users/${userId}/albums`);
export const getAlbumsPhotos = (albumId) =>
  api.get(`/albums/${albumId}/photos`);
