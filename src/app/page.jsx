"use client"; // This ensures the component is client-side

import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
export default function Page() {
  // const { data: session, status } = useSession();
  const [articleList, setArticleList] = useState([]);
  const [category, setCategory] = useState([]);
  const getArticles = async () => {
    const response = await fetch("https://dev.to/api/articles");
    const data = await response.json();
    setArticleList(data);
  };
  useEffect(() => {
    getArticles();
  }, []);
  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }

  // if (!session) {
  //   return <p>You are not logged in!</p>;
  // }
  console.log(category);
  return (
    <>
      <Navbar />
      <Home data={articleList} onSelected={setCategory} />
    </>
  );
}
