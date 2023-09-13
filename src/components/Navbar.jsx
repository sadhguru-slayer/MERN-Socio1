import React from 'react'
import { IoMdAdd, IoMdSearch } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = ({searchTerm, setSearchTerm,user}) => {
  const navigate = useNavigate();
  if(user){
  return (
    <div className="flex justify-around items-center gap-5  md:gap-5 w-full mt-5 pb-7" style={{
      background:"rgb(248, 233, 255)"
    }}>
        <div className="flex justify-start items-center w-1/2 px-2  outline-none focus-within:shadow-sm" style={{borderRadius:"40px",backgroundColor:"#371E33"}} >
          <IoMdSearch fontSize={21} className="ml-1 text-white" />
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            value={searchTerm}
            onFocus={() => navigate('/search')}
            className="p-2 text-white outline-none w-4/5"
            style={{backgroundColor:"#371E33"}}
          />
        </div>
        <div className="flex gap-3 h-9">
          <Link to={`user-profile/${user?._id}`} className="hidden md:block">
            <img style={{borderRadius:"50%",width:"2.5rem",height:"auto"}} src={user && user.image? user.image : 'https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740'} alt="user-pic" className="w-14 h-12 rounded-lg " />
          </Link>
          <Link to="/create-pin" style={{borderRadius:"50%" , border:"solid 3px black"}} className=" text-black w-8 h-8 md:w-10 md:h-10 flex justify-center items-center">
            <IoMdAdd fontSize={25}/>
          </Link>
        </div>
      </div>
  );}
  return null;
}

export default Navbar