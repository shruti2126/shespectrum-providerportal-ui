"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import Link from "next/link";
import posts from "../../data/posts";
import { Post } from "../../types/posts";
import { Button } from "../ui/button";
import { Icon, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface PostTableProps {
  limit?: number;
  title?: string;
}
const PostsTable = ({ limit, title }: PostTableProps) => {
  const router = useRouter();
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  //Filter posts to limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  const handleNewPost = () => {
    router.push("/posts/new");
  };
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between place-items-center">
        <h3 className="text-2xl mb-4 font-semibold">
          {title ? title : "Posts"}
        </h3>
        <Button
          onClick={handleNewPost}
          className="bg-teal-500 hover:bg-teal-700 h-9 text-white font-bold py-2 px-4 rounded"
        >
          <PlusCircle className="h-10 w-10" />
          Add New Post
        </Button>
      </div>

      <Table>
        <TableCaption>A list of recent posts</TableCaption>
        <TableHeader>
          <TableRow className="pt-4">
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post: Post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="text-right hidden md:table-cell">
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostsTable;
