"use client";
import Link from "next/link";
import { usePosts } from "@/app/hooks/usePosts";

const Posts = () => {
  const posts = usePosts();

  return (
    <div className="p-5">
      <h1 className="text-5xl flex justify-center">Posts</h1>
      {posts && (
        <ul>
          {posts.map(({ title, id }) => (
            <li className="hover:text-emerald-800 m-1" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
