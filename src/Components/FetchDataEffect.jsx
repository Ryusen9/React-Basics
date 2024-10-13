import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="p-4">
        <ul>
          {posts.map((post) => (
            <section key={Math.random()}>
              <li className="list-disc list-inside" key={post.id}>
                <span className="font-semibold">Tittle:</span> {post.title}
              </li>
              <li className="list-disc list-inside" key={post.id}>
                <span className="font-semibold">body:</span> {post.body}
              </li>
            </section>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FetchDataEffect;
