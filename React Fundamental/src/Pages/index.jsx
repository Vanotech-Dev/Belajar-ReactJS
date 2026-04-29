import { useState } from "react";
import Article from "../components/Article";
import post from "../post.json";
import Search from "../components/Search";

function HomePage() {
  const onSearchChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <h1 className="">Simple Blog</h1>
      <Search onSearchChange={onSearchChange} />
      {post.map((props, index) => (
        // <Article key={title} title={title} Tags={Tags} date={date} />
        <Article {...props} key={index} /> // saya diajarkan menggunakan spread atributes
      ))}
    </>
  );
}

export default HomePage;
