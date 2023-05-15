import React, { useContext } from "react";
import { AuthContext } from "../context/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {/* <h2>This is Home for {user?.displayName}</h2> */}
      <h2>This is Home for {user?.email}</h2>
    </div>
  );
};

export default Home;
