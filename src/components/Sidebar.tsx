// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css'; // Optional: add CSS for styling

// const Sidebar: React.FC = () => {
//   return (
//     <div className="sidebar">
//       <ul>
//         <li><Link to="/">Dashboard</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//         <li><Link to="/settings">Settings</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>logo</h2>
      <div className="dashboard">
      <a href="#dashboard">Product Manager</a>
      <a href="#profile">Delivery</a>
      <a href="#settings">Fees</a>
      <a href="#settings">Agent</a>
      <a href="#logout">Settings</a>
      </div>
    </div>
  );
};

export default Sidebar;

