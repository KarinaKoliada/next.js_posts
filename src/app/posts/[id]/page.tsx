"use client";
import { getPostById } from "@/app/services/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IPost } from "@/app/types/post";
//for test
const Post = () => {
  const { id: postId } = useParams<{ id: string }>();
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    const getPost = async () => {
      const data = await getPostById(postId);
      setPost(data);
    };
    getPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  const { id, title, body } = post;

  return (
    <div className="rounded-[15px] p-5 flex justify-center items-center right-40">
      <div className="flex flex-col items-center gap-4 max-w-xl text-center bg-[rgba(0,0,0,0.33)] p-6 rounded-xl shadow-[0px_8px_32px_rgba(0,0,0,0.3)]">
        <h2 className="text-3xl font-bold">Post-{id}</h2>
        <h3 className="text-xl">{title}</h3>
        <p className="text-base text-gray-300">{body}</p>
      </div>
    </div>
  );
};

export default Post;
