import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    props.onSearchChange(event.target.value);
  };

  return (
    <>
      <div>
        Cari Article: <input onChange={onSearchChange} />
      </div>
      <small>Tidak Ditemukan dengan kata {search}</small>
    </>
  );
}

export default Search;
