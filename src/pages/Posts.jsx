import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Posts = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const getRequest = async () => {
      const response = await axios.get("dummyjson.com/posts");
      setTodo(response.data.posts);
    };
    getRequest();
  }, []);

  return (
    <div>
      <ul>
        {todo.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
