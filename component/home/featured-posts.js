import classes from './featured-posts.module.css';
import PostsGrid from '../posts/posts-grid';

function FeaturedPosts(props) {
    const { posts } = props; 
    return (
        <section className={classes.latest}>
            <h2>Feature Posts</h2>
            {posts && <PostsGrid posts={posts} />}
        </section>
    )
}
export default FeaturedPosts;