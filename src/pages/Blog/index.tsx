import React from 'react';

const localPosts = [
  {
    title: 'React - Context API',
    author: 'Theodoros Vrakgos',
    text: 'My first post',
    source: 'by Kent Dodds',
  },
];

// const externalPosts: { title: string; author: string; text: string; }[] = [];

const Blog: React.FC = () => {
  const posts = localPosts;

  return (
    <div>
      {posts.map((post: {
        title: String,
        author: String,
        text: String,
        source: String,
      }, index: number) => (
          <div key={`post-key-${index.toString()}`} className="post">
            <h2 className="post_title">{post.title}</h2>
            <span className="post_author">{post.author}</span>
            <p className="post_text">{post.text}</p>
            <span className="post_text">{post.source}</span>
            {/* <span>Share on Facebook</span>
    <span>Share on Instagram</span>
    <span>Share the Link</span> */}
          </div>
        ))}
    </div>
  );
};

export default Blog;
