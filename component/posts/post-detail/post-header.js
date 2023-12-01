import classes from "./post-header.module.css";
import Image from "next/image";

function PostHeader(props) {
  const { title, image } = props;
  return (
    <header className={classes.posts}>
      <h1>{title}</h1>
      <Image src={image} width={300} height={200}/>
    </header>
  );
}
export default PostHeader;
