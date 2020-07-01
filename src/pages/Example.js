import React, { useState, useEffect } from "react";

const Example = () => {
  const [post, setPost] = useState(null);
  const [id, setId] = useState(1);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    const responce = await fetch(
      `https://madefor.github.io/postal-code-api/api/v1/100/0014.json`
    );
    const item = await responce.json();
    setPost(item);
    setloading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

      {loading ? <h1>loading</h1> : <h1>{post.title}</h1>}
    </div>
  );
};

export default Example;
