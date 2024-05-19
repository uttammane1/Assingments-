import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [err, setErr] = useState(false);
  const { user_id } = useParams();

  async function fetchAndUpdateData(user_id) {
    setLoading(true);
    try {
      const res = await axios({
        method: "get",
        url: `https://reqres.in/api/users/${user_id}`,
      });

      setUser(res?.data?.data);
      setLoading(false);
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAndUpdateData(user_id);
  }, [user_id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>something went wrong</h1>;
  }
  return (
    <>
      <h1>User Details Page</h1>
      <div>
        <img src={user?.avatar} alt="user" />
        <p>
          Name : {user?.first_name} {user?.last_name}
        </p>
        <p>Email : {user?.email}</p>
        <p>ID : {user?.id}</p>
      </div>
    </>
  );
}
