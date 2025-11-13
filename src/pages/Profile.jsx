import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  const { user, logout } = useAuth();
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center relative">
      {!user ? <p>Welcome Guest</p> : <p>Welcome {user?.username}</p>}
      <div className="flex flex-col absolute top-10 right-10  gap-6 border px-4 py-2 rounded-md">
        <div 
            onClick={() => setShowProfileModal(() => !showProfileModal)}
            className="flex gap-3 items-center cursor-pointer ">
          <CgProfile className="text-[24px]" />
          <span className="text-[18px]">{user?.username}</span>
        </div>
        {showProfileModal && (
          <button
            className="bg-red-500 text-white rounded-md px-3 py-1 cursor-pointer hover:opacity-80 transition text-[18px]"
            onClick={() => logout()}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
