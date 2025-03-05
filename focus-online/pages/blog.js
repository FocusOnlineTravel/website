import ArchivePage from '../wp-templates/archive'; 

const BlogPage = ({ posts }) => {
  return <ArchivePage posts={posts} />; 
};

export default BlogPage;