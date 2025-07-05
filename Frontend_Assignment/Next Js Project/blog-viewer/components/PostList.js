import styles from '../styles/PostList.module.css';
import { useState } from 'react';
import PostDetail from './PostDetail';

export default function PostList({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📚 Blog Posts</h1>

      {posts.map((post) => (
        <div
          key={post.id}
          className={styles.postItem}
          onClick={() => setSelectedPost(post)}
        >
          <p className={styles.postTitle}>{post.title}</p>
        </div>
      ))}

      {selectedPost && (
        <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}
