import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userItem = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/errorPage");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());

        setTimeout(() => navigate("/"), 0);
      }
    });
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between ">
      <img className="w-44" src={LOGO} alt="logo" />
      {userItem && (
        <div className="flex">
          <button className="text-white" onClick={handleSignout}>
            Sign Out
          </button>
          <label className="text-white">{userItem?.displayName}</label>
        </div>
      )}
    </div>
  );
};

export default Header;
