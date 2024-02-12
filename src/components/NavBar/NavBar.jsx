// import React from "react";
// import "./NavBar.css";
// import { IoCart } from "react-icons/io5";

// export default function NavBar() {
//   const NavData = [
//     "Landing",
//     "Home",
//     "Gallery",
//     "Shop",
//     "Blog",
//     "About",
//     "Team",
//     "Comtact",
//     <IoCart />,
//   ];

//   return (
//     <div className="container-main ">
//       <div className="nav-flex">
//         <div className="nav-hd">
//           <h1>Restaurant Landing Page</h1>
//         </div>
//         <ul className="nav-list">
//           {NavData.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import "./NavBar.css";
import { IoCart } from "react-icons/io5";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const NavData = [
    "Landing",
    "Home",
    "Gallery",
    "Shop",
    "Blog",
    "About",
    "Team",
    "Comtact",
    <IoCart />,
  ];

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="container-main-top">
      <div className="nav-flex">
        <div className="nav-hd">
          <h1>Restaurant Landing Page</h1>
        </div>

        <div className="navprnt">
        <button className="toggle-button" onClick={toggleNav}>
          &#9776;
        </button>
        <div className={`nav-links ${showNav ? "active" : ""}`}>
          <ul className="nav-list">
            {NavData.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
