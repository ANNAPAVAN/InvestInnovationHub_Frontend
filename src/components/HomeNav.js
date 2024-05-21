import React from 'react';
import { Link } from 'react-router-dom';

function HomeNav() {
  return (
    <nav className="navbar">
      
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/allstudents" className="nav-link">Students</Link>
      <Link to="/allentrepreneurs" className="nav-link">Entrepreneurs</Link>
      <Link to="/allinvestors" className="nav-link">Investors</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/register" className="nav-link">Register</Link>
      <Link to="/askai" className="nav-link">Q/A</Link>


    </nav>
  );
}

export default HomeNav;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import { Navbar, Nav} from 'react-bootstrap'; 
// import { Link } from 'react-router-dom'; 


// function HomeNav() {
//   const navItemsStyle = {
//     marginLeft: 'auto', 
//   };

//   return (
//     <Navbar bg="light" shadow="lg" expand="lg" fixed="top">
//       <Navbar.Brand style={{ fontSize: '24px', color: 'blue' }} as={Link} to="/">
//         Home
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto" style={navItemsStyle}>
//           <Nav.Link as={Link} to="/allstudents" className="nav-link">Students</Nav.Link>
//           <Nav.Link as={Link} to="/allentrepreneurs">Entrepreneurs</Nav.Link>
//           <Nav.Link as={Link} to="/allinvestors">Investors</Nav.Link>
//           <Nav.Link as={Link} to="/login">Login</Nav.Link>
//           <Nav.Link as={Link} to="/register">Register</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default HomeNav;
