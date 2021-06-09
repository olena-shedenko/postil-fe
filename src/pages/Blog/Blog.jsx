import React, { useEffect } from 'react';
import './Blog.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogPosts } from '../../store/operations';
import BlogPost from './BlogPost';

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogPosts());
  }, [dispatch]);

  const blogContent = useSelector((state) => state.blogposts);

  return (
    <div className="blogpost-block">
      {blogContent.map(({ heading, text, image, link }) => {
        return (
          <BlogPost heading={heading} text={text} image={image} link={link} />
        );
      })}
    </div>
  );
};

export default Blog;
