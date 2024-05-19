// Import necessary hooks from React
import { useState, useEffect } from "react";
// Import axios for making HTTP requests
import axios from "axios";
// Import custom components
import User from "./User";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Users() {
  // Declare state variables
  const [loading, setLoading] = useState(false); // to manage loading state
  const [users, setUsers] = useState([]); // to store the fetched users
  const [error, setError] = useState(false); // to manage error state
  const [page, setPage] = useState(1); // to track the current page
  const [totalPages, setTotalPages] = useState(1); // to store total number of pages

  // Function to fetch and update data from the API
  async function fetchAndUpdateData(page) {
    setLoading(true); // set loading to true when starting the request
    try {
      // Make a GET request to the API
      let res = await axios({
        method: "get",
        url: `https://reqres.in/api/users?page=${page}`, // URL with dynamic page number
      });

      // Update users and totalPages state with the response data
      setUsers(res?.data?.data);
      setTotalPages(Number(res?.data?.total_pages));
      setLoading(false); // set loading to false after the request is successful
    } catch (error) {
      setError(true); // set error to true if there's an error
      setLoading(false); // set loading to false after the request fails
    }
  }

  // useEffect hook to fetch data whenever the page state changes
  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  // If loading is true, display the LoadingIndicator component
  if (loading) {
    return <LoadingIndicator />;
  }

  // If error is true, display the ErrorIndicator component
  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <div id="pagination">
        {/* Button to go to the previous page, disabled if already on the first page */}
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREVIOUS
        </button>
        {/* Display the current page number */}
        <p>{page}</p>
        {/* Button to go to the next page, disabled if already on the last page */}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </button>
      </div>
      <h1>List of users</h1>
      {/* Map through the users array and render a User component for each user */}
      {users?.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </div>
  );
}

export default Users; // Export the Users component for use in other parts of the app
