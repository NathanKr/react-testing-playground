import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonPlaceholder = () => {
  const [users, setUsers] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUsers(res.data.map((it) => it.name));
      })
      .catch((err) => console.log(err));
  }, []);

  const usersElements = users.map((it, index) => <li key={index}>{it}</li>);

  return (
    <div>
      <h2>JsonPlaceholder</h2>
      <ul>{usersElements}</ul>
    </div>
  );
};

export default JsonPlaceholder;
