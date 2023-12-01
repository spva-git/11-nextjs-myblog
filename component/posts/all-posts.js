import PostGrid from "./posts-grid";
import classes from "./all-posts.module.css";

function AllPosts(props) {
  const { posts } = props;
  return (
    <section className={classes.posts}>
      <h1></h1>
      <PostGrid posts={posts}/>
    </section>
  );
}
export default AllPosts;
