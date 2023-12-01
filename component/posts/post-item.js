import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

function PostsItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`
console.log(imagePath, linkPath);

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <h3>{excerpt} </h3>
        </div>
      </Link>
    </li>
  );
}
export default PostsItem;
