/* eslint-disable react/prop-types */
import React from 'react';
import './Blog.scss';

const BlogPost = ({ heading, text, image, link }) => {
  return (
    <div className="item-wrapper">
      <a href={link} className="blog-image-wrapper">
        <div className="read-more">
          <span className="read-more-text">read more</span>
        </div>
        <img src={`${image}`} className="blog-image" alt="unlodaded" />
      </a>
      <a href={link} className="blog-heading">
        {heading}
      </a>
      <span className="blog-text">{text}</span>
    </div>
  );
};

export default BlogPost;
