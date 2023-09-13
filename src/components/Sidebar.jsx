/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import logo from '../assets/logo.png';
import { categories } from '../utils/data';

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-100 hover:text-white transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize text-white';

const Sidebar = ({ closeToggle, user }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (

    <div className="flex flex-col justify-between h-full overflow-y-scroll  min-w-210 hide-scrollbar">
      <div className="flex flex-col gap-3" style={
        {
          overflowY:"scroll"
        }
      }>
        <div style={{maxWidth:"14.5rem",width:"100%",backgroundColor:"white",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",padding:"0rem 1rem"}}>
        <Link
          to="/"
          className="flex w-20 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className=" w-fit" />
          <h3>VINCET</h3>
        </Link>
        </div>
        
        <div className="back-blur py-8 flex flex-col gap-5" style={{
          borderRadius:"20px",backgroundColor:"rgb(55,30,51)",border:"solid 0.5px white"}}>
          
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
            onClick={handleCloseSidebar}
          >
            <RiHomeFill className='text-white'/>
            Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base text-white ">DISCOVER CATEGORIES</h3>
          {/* <p className='m-2'> */}
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
              onClick={handleCloseSidebar}
              key={category.name}
              style={{fontSize:"12px"}}
            >
              <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" />
              <p style={{background:"transpaprent"}}>{category.name.toUpperCase()}</p>
            </NavLink>
          ))}
        {/* </div> */}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user?._id}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-gray-100 rounded-lg shadow-xl mx-3"
          onClick={handleCloseSidebar}
        >
          <img src={user && user?.image? user?.image : 'https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740'} className="w-10 h-10 rounded-full" alt="user-profile" />
          <p>{user?.userName.toUpperCase()}</p>
          <IoIosArrowForward />
        </Link>
      )}
    </div>
  );
};

export default Sidebar;