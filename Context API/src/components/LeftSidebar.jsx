import { useContext } from "react"; // Importing necessary libraries
import { AuthContext } from "../context/AuthContextProvider";

export default function LeftSidebar() {
  // Getting isLoggedin value, login and logout function from AuthContext

  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div className="left-sidebar">
      <p>Left Sidebar</p>
      <h4> Is User Logged In : {isLoggedIn ? "Yes" : "No"}</h4>
      <button onClick={login}>LOGIN</button>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
}
