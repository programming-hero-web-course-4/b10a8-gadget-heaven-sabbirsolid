// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { CartHandle, WishListHandle } from "../Root/Root";
// import heartIcon from "../../assets/heart.png";
// import cartIcon from "../../assets/cart.png";
// import './Navbar.css'

// const Navbar = () => {
//   const [cart, setCart] = useContext(CartHandle);
//   const [wishList, setWishList] = useContext(WishListHandle);
//   const links = (
//     < >
//       <li>
//         <NavLink className="border-2 bg-white rounded-lg px-2 py-1" to="/">Home</NavLink>
//       </li>
//       <li  className="border-2 rounded-lg px-2 py-1 bg-white">
//         <NavLink  to="/dashboard">Dashboard</NavLink>
//       </li>
//       <li className="border-2 bg-white rounded-lg px-2 py-1">
//         <NavLink to="">Statistics</NavLink>
//       </li>
//     </>
//   );
//   return (
//     <div className="navbar bg-base-100 lg:px-10">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className=" flex flex-col gap-2 dropdown-content font-bold "
//           >
//             {links}
//           </ul>
//         </div>
//         <a className=" font-bold text-xl">Gadgets Heaven</a>
//       </div>
//       {/* navbar center items */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="flex items-center gap-4 font-bold">{links}</ul>
//       </div>
//       {/* navbar cart and wishlist icons */}
//       <div className="navbar-end flex gap-2">
//         <div className="indicator rounded-full p-2 border-2">
//           <div className="w-5">
//             <img src={cartIcon} alt="" />
//           </div>
//           <span className="badge badge-sm indicator-item">{cart.length}</span>
//         </div>
//         <div className="indicator rounded-full p-2 border-2">
//           <div>
//             <img className="w-5" src={heartIcon} alt="" />
//           </div>
//           <span className="badge badge-sm indicator-item">
//             {wishList.length}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartHandle, WishListHandle } from "../Root/Root";
import heartIcon from "../../assets/heart.png";
import cartIcon from "../../assets/cart.png";
import './Navbar.css'

const Navbar = () => {
  const [cart] = useContext(CartHandle);
  const [wishList] = useContext(WishListHandle);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `border border-gray-300 rounded-lg px-2 py-1 ${isActive ? "bg-[#9538E2] text-white" : "bg-white"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `border border-gray-300 rounded-lg px-2 py-1 ${isActive ? "bg-[#9538E2] text-white" : "bg-white"}`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            `border border-gray-300 rounded-lg px-2 py-1 ${isActive ? "bg-[#9538E2] text-white" : "bg-white"}`
          }
        >
          Statistics
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content flex bg-white rounded-xl p-5 flex-col gap-3 font-bold lg:hidden"
          >
            {links}
          </ul>
        </div>
        <a className="font-bold text-xl">Gadgets Heaven</a>
      </div>
      
      {/* Navbar center items for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-4 font-bold">{links}</ul>
      </div>
      
      {/* Navbar cart and wishlist icons */}
      <div className="navbar-end flex gap-2">
        <div className="indicator rounded-full p-2 border-2">
          <div className="w-5">
            <img src={cartIcon} alt="Cart Icon" />
          </div>
          <span className="badge badge-sm indicator-item">{cart.length}</span>
        </div>
        <div className="indicator rounded-full p-2 border-2">
          <div>
            <img className="w-5" src={heartIcon} alt="Wishlist Icon" />
          </div>
          <span className="badge badge-sm indicator-item">
            {wishList.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
