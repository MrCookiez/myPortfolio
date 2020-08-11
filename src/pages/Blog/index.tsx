import React from "react";

const localPosts = [
  {
    title: "React - Context API",
    author: "Theodoros Vrakgos",
    text: "My first post",
    source: "by Kent Dodds",
  },
];

// const externalPosts: { title: string; author: string; text: string; }[] = [];

const Blog: React.FC = () => {
  const posts = localPosts;

  return (
    <div>
      {posts.map(
        (
          post: {
            title: String;
            author: String;
            text: String;
            source: String;
          },
          index: number
        ) => (
          <div key={`post-key-${index.toString()}`} className="post">
            empty!
            {/* <span>Share on Facebook</span>
    <span>Share on Instagram</span>
    <span>Share the Link</span> */}
          </div>
        )
      )}
    </div>
  );
};

export default Blog;
