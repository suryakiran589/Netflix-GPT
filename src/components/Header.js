import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import GptSearch from "./GptSearch";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  const handleWatchList = () => {

   if (location.pathname === "/browse") {
  navigate("/watchlist");
} else {
  navigate("/browse");
}
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        if (location.pathname === "/" || location.pathname === "/login") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleProfileClick = () => {
    setToggleProfile(!toggleProfile);
  };

  return (
    <div className="fixed w-screen px-2 py-1 md:px-8 md:py-5 bg-gradient-to-b from-black  bg-opacity-30 flex justify-between items-center z-20">
      {/* <img
        alt=""
        className="w-36 flex"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      ></img> */}
      < h1 className="text-xl pl-3 md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">GPTFlix</h1>
      {user && (
        <div className="px-3 md:px-8 py-5 flex justify-center">
          
            <div className="flex items-center ">
              <button
                className="text-xs md:text-l mx-1 p-1 bg-purple-600 rounded-md  text-white hover:bg-white hover:text-black md:mx-2 md:p-2"
                onClick={handleGptSearchClick}
              >
                GPT Search
              </button>
              <button
                className="text-xs md:text-l mx-1 p-0 text-white  hover:bg-slate-200 hover:bg-opacity-20 hover:rounded-md   md:p-2"
                onClick={handleWatchList}
              >
                {location.pathname === "/browse" ? "WatchList" : "Home"}
              </button>
              {console.log(isHome)}
              <button
                className="text-xs md:text-md mx-1 p-0 text-white  hover:bg-slate-200 hover:bg-opacity-20 hover:rounded-md md:mx-2  md:p-2"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </div>
          
          <img
            alt=""
            className="w-7 md:w-10 ml-1 cursor-pointer"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            onClick={handleProfileClick}
          ></img>
        </div>
      )}
    </div>
  );
};

export default Header;
