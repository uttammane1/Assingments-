import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import Tickets from "../Pages/Tickets";
import TicketView from "../Pages/TicketView";
import TicketEdit from "../Pages/TicketEdit";
import TicketCreate from "../Pages/TicketCreate";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets"
        element={
          <PrivateRoute>
            <Tickets />
          </PrivateRoute>
        }
      />
      <Route
        path="/ticket/create"
        element={
          <PrivateRoute>
            <TicketCreate />
          </PrivateRoute>
        }
      />
      <Route
        path="/ticket/view/:id"
        element={
          <PrivateRoute>
            <TicketView />
          </PrivateRoute>
        }
      />
      <Route
        path="/ticket/edit/:id"
        element={
          <PrivateRoute>
            <TicketEdit />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}