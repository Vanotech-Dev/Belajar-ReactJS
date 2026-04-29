import Article from "../components/Article";
import post from "../post.json";

function HomePage() {
  return (
    <>
      <h1 className="">Simple Blog</h1>
      {post.map((blog) => (
        <Article
          key={blog.title}
          title={blog.title}
          Tag={blog.Tags}
          date={blog.date}
        />
      ))}
    </>
  );
}

export default HomePage;
