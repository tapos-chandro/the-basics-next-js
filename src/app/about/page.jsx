'use client'

import { useEffect, useState } from "react";

export default function About () {

  
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
  
      setPosts(data);
      console.log(data);
    };

    fetchPosts();
  }, []);

  console.log(posts)

  return (
    <div> This is About {posts.length} </div>
  )
}
