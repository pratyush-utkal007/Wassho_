import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "../App.css";

const TeamCard = ({ img, name, position, twitLink, InstaLink, fbLink }) => {
  return (
    <>
      <div className="member shadow-lg rounded-md">
        <div className="img-wrapper">
          <img src={img} alt="img" />
        </div>
        <div className="py-4 px-2 relative">
          <h2 className="md:text-2xl text-xl font-semibold text-blue-950">
            {name}
          </h2>
          <p className="my-3 font-medium text-slate-500">{position}</p>
          <div className="social-link absolute right-2 bottom-2 overflow-hidden">
            <div className="links bg-black overflow-hidden pt-2">
                <Link to={fbLink}><AiFillFacebook className="text-2xl mx-auto text-white mb-4 hover:text-blue-400 duration-300"/></Link>
                <Link to={InstaLink}><AiFillInstagram className="text-2xl mx-auto text-white mb-4 hover:text-blue-400 duration-300"/></Link>
                <Link to={twitLink}><AiFillTwitterCircle className="text-2xl mx-auto text-white mb-4 hover:text-blue-400 duration-300"/></Link>
            </div>
            <div className="w-5 h-5 grid p-4 place-content-center bg-orange-500 text-white">
              <AiOutlineShareAlt className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
