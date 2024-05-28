// import {
    
//     Heading,
//     Input,
//     Button,
//     VStack,
//     Container,
//   } from "@chakra-ui/react";
//   import { useState, useContext } from "react";
//   import axios from "axios";
//   import { AuthContext } from "../Context/AuthContextProvider";
//   import { Navigate } from "react-router-dom";
  
//   export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  
//     const {
//       login,
//       authDetails: { isLoggedIn },
//     } = useContext(AuthContext);
  
//     async function handleClick() {
//       try {
//         let resp = await axios({
//           method: "post",
//           url: "https://reqres.in/api/login",
//           data: {
//             email,
//             password,
//           },
//         });
  
//         login(resp?.data?.token);
//       } catch (error) {
//         console.log(error);
//       }
//     }
  
//     if (isLoggedIn) {
//       return <Navigate to="/" />;
//     }
  
//     return (
//       <Container maxW={"600px"}>
//         <VStack spacing={6}>
//           <Heading as="h1" size="xl">
//             Login Page
//           </Heading>
  
//           <Input
//             placeholder="Email"
//             type="email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//           <Input
//             placeholder="Password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
  
//           <Button variant="outline" colorScheme="red" onClick={handleClick}>
//             LOGIN
//           </Button>
//         </VStack>
//       </Container>
//     );
//   }



// import { Heading, Input, Button, VStack, Container, Text } from "@chakra-ui/react";
// import { useState, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../Context/AuthContextProvider";
// import { Navigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const { login, authDetails: { isLoggedIn } } = useContext(AuthContext);

//   async function handleClick() {
//     try {
//       const resp = await axios.post("https://reqres.in/api/login", { email, password });
//       login(resp?.data?.token);
//     } catch (error) {
//       console.error("Login error:", error);
//       setError("Invalid email or password. Please try again.");
//     }
//   }

//   if (isLoggedIn) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <Container maxW="600px">
//       <VStack spacing={6}>
//         <Heading as="h1" size="xl">
//           Login Page
//         </Heading>

//         <Input
//           placeholder="Email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <Input
//           placeholder="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {error && <Text color="red">{error}</Text>}

//         <Button variant="outline" colorScheme="red" onClick={handleClick}>
//           LOGIN
//         </Button>
//       </VStack>
//     </Container>
//   );
// }





import { Heading, Input, Button, VStack, Container, Text } from "@chakra-ui/react";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, authDetails: { isLoggedIn } } = useContext(AuthContext);

  async function handleClick() {
    try {
      const resp = await axios.post("https://reqres.in/api/login", { email, password });
      login(resp?.data?.token);
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
    }
  }

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Container maxW="600px">
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Login Page
        </Heading>

        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <Text color="red">{error}</Text>}

        <Button variant="outline" colorScheme="red" onClick={handleClick}>
          LOGIN
        </Button>
      </VStack>
    </Container>
  );
}
