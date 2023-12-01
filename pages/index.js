import FeaturedPosts from "../component/home/featured-posts";
import Hero from "../component/home/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  const { posts } = props;
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}
export function getStaticProps(){
  const featuredPosts = getFeaturedPosts();
  console.log('featuredPosts', featuredPosts)
  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 60
  }
}
export default HomePage;
