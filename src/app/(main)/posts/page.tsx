import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
const PostsPage = () => {
  return (
    <>
      <BackButton text="Home" link="/dashboard" />
      <PostsTable limit={5} />
      <PostsPagination />
    </>
  );
};

export default PostsPage;
