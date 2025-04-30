"use client";
import { useEffect, useState } from "react";
import { getPosts } from "@/app/services/api";
import { IPost } from "../types/post";

export const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    getData();
  }, []);

  return posts;
};
