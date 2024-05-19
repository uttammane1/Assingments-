import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContextProvider.jsx";
import { BulbContextProvider } from "./context/BulbContextProvider.jsx";

{
  /* Wrapping App component with context providers */
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BulbContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BulbContextProvider>
);
