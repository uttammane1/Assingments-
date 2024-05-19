import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Users() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      const res = await axios({
        method: "get",
        url: "https://reqres.in/api/users?page=2",
      });

      setUsers(res?.data?.data);
      setLoading(false);
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>something went wrong</h1>;
  }

  return (
    <>
      <h1>Users Page</h1>
      {users?.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px dashed black",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h3>
            {user?.first_name} {user?.last_name}
          </h3>
          <Link to={`/users/${user?.id}`}>Click here for more details</Link>
        </div>
      ))}
    </>
  );
}
