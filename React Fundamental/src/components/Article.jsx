function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date: {props.date}, Tag: {props.Tag.join(", ")}
      </small>
    </>
  );
}

export default Article;
