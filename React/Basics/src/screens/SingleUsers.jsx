import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function SingleUsers() {
  const { id } = useParams();

  const [singleUser, setSingleUser] = useState();

  async function getUserData() {
    try {
      result = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      setSingleUser(result.data);
      console.log(singleUser);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return <>
  </>;
}
