import UsersList from "./components/UsersList";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="container mx-auto">{<UsersList />}</div>
      )}
    </>
  );
}

export default App;
