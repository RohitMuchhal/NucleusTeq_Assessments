import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
      <div className={styles.container}>
        <h1 className={styles.title}>📝 Blog Viewer App</h1>
        <p className={styles.subtitle}>Explore simple blog posts</p>
        <Link href="/posts">
          <button className={styles.button}>See Blogs</button>
        </Link>
      </div>
  );
}
