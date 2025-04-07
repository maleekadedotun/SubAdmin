// import './App.css'
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import FeaturedInfo from './components/featuredInfo/FeaturedInfo';

// function App() {

//   return (
//     <>
//       <div className="dashboard-container">

//        <Sidebar />
//         <div>
//           <Navbar />    
//           <div>
//             <h1>vvvvv</h1>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default App

import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import FeaturedInfo from './components/featuredInfo/FeaturedInfo';

function App() {
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />    
          <div className="content">
            <FeaturedInfo /> {/* Your actual content here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

