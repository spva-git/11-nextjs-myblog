import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkDown from "react-markdown";
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenders = {
    /*img(image) {
      return (
        <Image 
          src={`/images/posts/${post.slug}/${image.src}`} 
          alt={image.alt} 
          width={600} 
          height={300} 
        />
      );
    }*/
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image 
              src={`/images/posts/${post.slug}/${image.src}`} 
              alt={image.alt} 
              width={600} 
              height={300} 
            />
          </div>
        );
      }
    },
    code(code) {
      const {  className, children } = code;
      const language = className.split('-')[1];
      return <SyntaxHighlighter  
        style={atomDark}
        language={language}
        children={children} 
      />
    }
  };
  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={post.title} />
      <ReactMarkDown components={customRenders}>{post.content}</ReactMarkDown>
    </article>
  );
}
export default PostContent;
