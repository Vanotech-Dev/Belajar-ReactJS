import Article from "../components/Article";
import post from "../post.json";

function HomePage() {
  return (
    <>
      <h1 className="">Simple Blog</h1>
      {post.map(({ title, Tags, date }) => (
        // <Article key={title} title={title} Tag={Tags} date={date} />
        <Article {...{ title, Tags, date }} /> // saya diajarkan menggunakan spread atributes
      ))}
    </>
  );
}

export default HomePage;
