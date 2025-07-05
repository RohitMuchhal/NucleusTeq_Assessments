import styles from '../styles/PostDetail.module.css';

export default function PostDetail({ post, onClose }) {
  if (!post) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>X</button>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.content}>{post.content}</p>
      </div>
    </div>
  );
}
