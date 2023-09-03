import React from 'react';
import { useParams } from 'react-router-dom';

// Sample array of blog posts
const blogPosts = [
  {
    id: 1,
    image: 'https://picsum.photos/500/300/?image=10',
    title: 'Sample Blog Post 1',
    description: 'This is the first sample blog post.',
  },
  {
    id: 2,
    image: 'https://picsum.photos/500/300/?image=5',
    title: 'Sample Blog Post 2',
    description: 'This is the second sample blog post.',
  },
  // Add more blog posts as needed
];

const BlogPost = () => {
  const { id } = useParams();

  // Find the blog post with the matching ID
  const blogPost = blogPosts.find(post => post.id === parseInt(id));

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className='blogPost'>
      <img src={blogPost.image} alt={blogPost.title} />
       <h1>{blogPost.title}</h1>
      <p>{blogPost.description}</p>
    </div>
  );
};

export default BlogPost;