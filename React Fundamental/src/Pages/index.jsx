import Article from "../components/Article";
import post from "../post.json";

function HomePage() {
  return (
    <>
      <h1 className="mb-10">Simple Blog</h1>
      {post.map((blog) => (
        <Article
          key={blog.title}
          title={blog.title}
          tag={blog.Tag}
          date={blog.date}
        />
      ))}
    </>
  );
}

export default HomePage;
