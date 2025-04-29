import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

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
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
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
