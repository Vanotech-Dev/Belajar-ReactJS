function Article(props) {
  return (
    <>
      <div>{props.title}</div>
      <small>
        Date: {props.date}, Tag: {props.Tag.join(", ")}
      </small>
    </>
  );
}

export default Article;
