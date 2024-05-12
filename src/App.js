import './App.css';
import React,{useState, useEffect} from 'react';
function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); // Pagination state

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]); // Effect depends on page

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          >
            Previous
          </button>
          <button onClick={() => setPage((prevPage) => prevPage + 1)}>
            Next
          </button>
        </>
      )}
    </>
  );
}


export default App;
