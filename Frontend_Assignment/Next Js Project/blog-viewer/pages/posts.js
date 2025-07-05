import PostList from '../components/PostList';

export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:3000/api/posts');
    const posts = await res.json();
    return { props: { posts } };
  } catch (error) {
    return { props: { posts: [] } }; 
  }
}

export default function PostsPage({ posts }) {
  return (
    <>
      <PostList posts={posts} />
    </>
  );
}
