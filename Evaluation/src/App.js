import React from 'react';
import { Routes, Route} from 'react-router-dom'; 
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import PrivateRoute from './PrivateRoute'; 
import { AuthContext } from './AuthContext';

const App = () => {
  return (
    <ChakraProvider>
      <AuthContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <PrivateRoute path="/home" element={<HomePage />} />
          <PrivateRoute path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </AuthContext>
    </ChakraProvider>
  );
};

export default App;
