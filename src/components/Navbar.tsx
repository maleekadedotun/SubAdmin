// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; 

// const Navbar: React.FC = () => {
//   return (
//     <div className="navbar">
//       {/* <div className="navbar-left">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/services">Services</Link>
//       </div>
//       <div className="navbar-right">
//         <button>Logout</button>
//       </div> */}
//       <h1>Navbar</h1>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { TfiListOl } from "react-icons/tfi";


const Navbar: React.FC = () => {
  return (
  <>
  <div className="navbar">
    <div className="nav">
      <h1 className="dash">Dashboards <span className="forwardSlash">/</span></h1>
      <h1 className="home">Home</h1>
    </div>

    <div className="search-input-container">
      <IoSearchOutline className="search-icon" />
      <input
        className="navInput"
        type="text"
        placeholder="Search"
      />
      <TfiListOl className="list" />
    </div>
  </div>
  </>
  );
};

export default Navbar;
