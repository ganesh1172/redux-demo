import { useEffect, useState } from "react";

const SearchFilter = ({ data }) => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  const filterResult = data.filter((val) => val.title.toLowerCase().includes(input.toLowerCase()));

  useEffect(() => {
    setTimeout(() => {
      console.log("something");
    }, 2000);
  }, []);
  return (
    <div>
      <input type="text" value={input} placeholder="Enter keyword" onChange={(e) => handleChange(e)} />
      {filterResult && filterResult.length > 0
        ? filterResult.map((val) => {
            return (
              <p key={val.id}>
                {val.title}
                {val.id}
              </p>
            );
          })
        : data.map((val) => {
            return (
              <p key={val.id}>
                {val.title}
                {val.id}
              </p>
            );
          })}
    </div>
  );
};

export default SearchFilter;
