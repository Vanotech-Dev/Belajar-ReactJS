import { useState } from "react";
import Article from "../components/Article";
import postData from "../post.json";
import Search from "../components/Search";

function HomePage() {
  const [posts, setPosts] = useState(postData);

  const onSearchChange = (value) => {
    const filteredPosts = postData.filter((item) => item.title.includes(value));
    setPosts(filteredPosts);
  };
  return (
    <>
      <h1 className="">Simple Blog</h1>
      <Search onSearchChange={onSearchChange} />
      {posts.map((props, index) => (
        // <Article key={title} title={title} Tags={Tags} date={date} />
        <Article {...props} key={index} /> // saya diajarkan menggunakan spread atributes
      ))}
    </>
  );
}

export default HomePage;
