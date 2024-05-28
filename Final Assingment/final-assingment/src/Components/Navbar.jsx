// import { NavLink } from "react-router-dom"
// import "./Navbar.css"
// import {Button} from "@chakra-ui/react";
// import { AuthContextProvider } from "./Context/AuthContextProvider.jsx";




 

// const Navbar = () => {
//   return (
//     <>
//     <NavLink to="/">Home</NavLink>
//     <NavLink to="/about">About</NavLink>
//     <NavLink to="/contact">Contact</NavLink>
//     <NavLink to="/tickets">Tickets</NavLink>
//     <NavLink to="/ticketcreate">TicketCreate</NavLink>
//     <NavLink to="/ticketview">TicketView</NavLink>
//     <NavLink to="/ticketedit">TicketEdit</NavLink>
//     <NavLink to="/login">Login</NavLink>
//     <Button colorScheme='red' size='xs'>LogOut</Button>
//     </>
        
//   )
// }

// export default Navbar
import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link as ChakraLink, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

// home, login, about, contact

const links = [
  {
    to: "/",
    label: "HOME",
  },
  {
    to: "/login",
    label: "LOGIN",
  },
  {
    to: "/about",
    label: "ABOUT",
  },
  {
    to: "/contact",
    label: "CONTACT",
  },
  {
    to: "/tickets",
    label: "TICKETS",
  },
];

export default function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <Flex
      align="center"
      justify="space-around"
      background="gray.200"
      padding={4}
    >
      {links?.map((link) => (
        <ChakraLink
          as={ReactRouterLink}
          key={link.to}
          to={link.to}
          color="gray.900"
        >
          {link.label}
        </ChakraLink>
      ))}
      <Button variant="outline" colorScheme="red" onClick={logout}>
        LOGOUT
      </Button>
    </Flex>
  );
}