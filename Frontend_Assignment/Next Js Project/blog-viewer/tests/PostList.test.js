import { render, screen, fireEvent } from '@testing-library/react';
import PostList from '../components/PostList';

const mockPosts = [
  { id: '1', title: 'First Post', content: 'First content' },
  { id: '2', title: 'Second Post', content: 'Second content' },
];

describe('PostList Component', () => {
  it('renders the list heading and all posts', () => {
    render(<PostList posts={mockPosts} />);
    
    expect(screen.getByText('📚 Blog Posts')).toBeInTheDocument();
    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();
  });

  it('opens PostDetail when a post is clicked', () => {
    render(<PostList posts={mockPosts} />);
    
    fireEvent.click(screen.getByText('First Post'));
    expect(screen.getByText('First content')).toBeInTheDocument();
  });

  it('closes PostDetail when the close button is clicked', () => {
    render(<PostList posts={mockPosts} />);
    
    // Open the detail view
    fireEvent.click(screen.getByText('First Post'));
    
    // Close it
    fireEvent.click(screen.getByText('X'));
    
    // Verify the content is no longer visible
    expect(screen.queryByText('First content')).not.toBeInTheDocument();
  });

  it('renders nothing when no posts are provided', () => {
    const { container } = render(<PostList posts={[]} />);
    expect(screen.queryByText(/Blog Posts/i)).toBeInTheDocument();
    expect(container.querySelectorAll('.postItem')).toHaveLength(0);
  });
});