import { useState } from "react";
import axios from "axios";
import User from "./User";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Users() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `https://reqres.in/api/users`,
      });

      setUsers(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of users</h1>
      <button onClick={fetchAndUpdateData}>
        Click to display list of users
      </button>
      {users?.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </div>
  );
}

export default Users;
