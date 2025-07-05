import { render, screen, fireEvent } from '@testing-library/react';
import PostDetail from '../components/PostDetail';

const mockPost = {
  id: '1',
  title: 'Test Post',
  content: 'Test content for the post detail view'
};

describe('PostDetail Component', () => {
  it('renders the post title and content', () => {
    const mockClose = jest.fn();
    render(<PostDetail post={mockPost} onClose={mockClose} />);
    
    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('Test content for the post detail view')).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    const mockClose = jest.fn();
    render(<PostDetail post={mockPost} onClose={mockClose} />);
    
    fireEvent.click(screen.getByText('X'));
    expect(mockClose).toHaveBeenCalledTimes(1);
  });

  it('does not render when no post is provided', () => {
    const { container } = render(<PostDetail post={null} onClose={() => {}} />);
    expect(container).toBeEmptyDOMElement();
  });
});