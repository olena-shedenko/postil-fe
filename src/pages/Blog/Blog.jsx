import React from 'react';
import './Blog.scss';
// import { useSelector, useDispatch } from 'react-redux';
// import { getBlogPosts } from '../../store/operations';
import BlogPost from './BlogPost';

const Blog = () => {
  return (
    <div className="blog-block">
      <BlogPost
        heading="New offers exclusive for you!"
        text="Up to 50% sale for all stock"
        image={`${process.env.PUBLIC_URL}/images/blogposts/testimg1.jpg`}
        link="https://www.tropicfeel.com"
      />
      <BlogPost
        heading="Wonderful White Bedroom Inspiration"
        text="There's nothing quite like a wonderful white bedroom, so we're here to give you some handy tips and inspiration for your white bedroom décor."
        image={`${process.env.PUBLIC_URL}/images/blogposts/testimg2.jpg`}
        link="https://www.tropicfeel.com"
      />
      <BlogPost
        heading="Our Planet, Your Bed"
        text="Read all about the steps we're taking to not only bring you beautiful bedrooms, but how we are busy keeping the planet clean, too."
        image={`${process.env.PUBLIC_URL}/images/blogposts/testimg3.jpg`}
        link="https://www.tropicfeel.com"
      />
      <BlogPost
        heading="Our Planet, Your Bed"
        text="Read all about the steps we're taking to not only bring you beautiful bedrooms, but how we are busy keeping the planet clean, too."
        image={`${process.env.PUBLIC_URL}/images/blogposts/testimg3.jpg`}
        link="https://www.tropicfeel.com"
      />
      <BlogPost
        heading="Our Planet, Your Bed"
        text="Read all about the steps we're taking to not only bring you beautiful bedrooms, but how we are busy keeping the planet clean, too."
        image={`${process.env.PUBLIC_URL}/images/blogposts/testimg3.jpg`}
        link="https://www.tropicfeel.com"
      />
    </div>
  );

  // const dispatch = useDispatch();
  // dispatch(getBlogPosts());
  // const blogContent = useSelector((state) => state.blogposts);

  // return (
  //   <div className="blogpost-block">
  //     {blogContent.forEach(({ heading, text, image }) => (
  //       <BlogPost heading={heading} text={text} image={image} />
  //     ))}
  //   </div>
  // );
};

export default Blog;
