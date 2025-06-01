import { Provider, useDispatch } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { useEffect } from "react";
import { addUser,removeUser } from "./utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";


function App() {
  // const dispatch = useDispatch()

  
  return (
    <div className="">
      <Provider store={appStore}>
      <Body />
      </Provider>
    </div>
  );
}

export default App;
