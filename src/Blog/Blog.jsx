import React from 'react';
import '../styles/Blog.scss';

const Blog = () => {
    // Placeholder blog posts data
    const posts = [
        { title: 'Blog Post 1', summary: 'Lorem ipsum dolor sit amet.', image: 'post1-placeholder.jpg' },
        { title: 'Blog Post 2', summary: 'Quisque nisl eros, pulvinar facilisis justo mollis.', image: 'post2-placeholder.jpg' },
        // Add more posts as needed
    ];

    return (
        <div className="blog">
            <h1>Blog</h1>
            <div className="post-list">
                {posts.map((post, index) => (
                    <div key={index} className="post">
                        <img src={post.image} alt={post.title} className="post-image" />
                        <h2>{post.title}</h2>
                        <p>{post.summary}</p>
                        <a href="#" className="post-link">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
