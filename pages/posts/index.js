import AllPosts from '../../component/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';


function AllPostsPage(props){
    return <AllPosts posts={props.posts}/>
}

export function getStaticProps(){
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    },
    revalidate: 60
  }
}

export default AllPostsPage;