import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonPlaceholder = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let isCancelled = false;
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(url)
      .then((res) => {
        if(!isCancelled){
          setUsers(res.data.map((it) => it.name));
        }
      })
      .catch((err) => {
        console.error(err);
      });

      return () => {
        isCancelled = true;
        source.cancel('Operation canceled');
      }
  }, []);

  const url = "https://jsonplaceholder.typicode.com/users";
  const usersElements = users.map((it, index) => <li key={index}>{it}</li>);

  return (
    <div>
      <h2>JsonPlaceholder</h2>
      <ul>{usersElements}</ul>
    </div>
  );
};

export default JsonPlaceholder;
