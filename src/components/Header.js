import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store)=> store.user)
  const handleSignOut=() =>{
    signOut(auth).then(() => {
    
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
})
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
        // ...
      } else {
        dispatch(removeUser());
        navigate("/")
        // User is signed out
        // ...
      }
    });
    return () => unsubscribe()
  }, []);

  return (
    <div className="absolute w-screen px-8 py-5 bg-gradient-to-b from-black  bg-opacity-30 flex justify-between z-20">
      <img className="w-36 flex" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>
      {user && <div className='px-8 py-5 flex'>
        <img className='w-10 ' src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp'></img>
        <button className='text-white' onClick={handleSignOut}>Sign out</button>
      </div>}
    </div>
  )
}

export default Header
