// import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import Login from './Pages/Login'
// import TicketCreate from './Pages/TicketCreate'
// import TicketEdit from './Pages/TicketEdit'
// import TicketView from './Pages/TicketView'
// import Tickets from './Pages/Tickets'
import Navbar from './Components/Navbar'
import AllRoutes from './Components/AllRoutes'


function App() {


  return (

    <>
    <Navbar />
    <AllRoutes />
     {/* <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={< About/>} />
       <Route path="/contact" element={< Contact/>} />
       <Route path="/login" element={< Login/>} />
       <Route path="/ticketcreate" element={< TicketCreate/>} />
       <Route path="/ticketedit" element={< TicketEdit/>} />
       <Route path="/ticketview" element={< TicketView/>} />
       <Route path="/tickets" element={< Tickets/>} />
       
       </Routes> */}
    </>
)}
export default App
