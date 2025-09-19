import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MyDashboard from "./components/MyDashboard";
import rationImg from "./Assets/ration.jpg";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [flip, setFlip] = useState(false);

  return (
    <Routes>
      {!token ? (
        <Route
          path="/"
          element={
            <div className="container">
              <div className={`card ${flip ? "flipped" : ""}`}>
                {/* Left Image */}
                <div className="image-side">
                  <img src={rationImg} alt="ration" />
                </div>

                {/* Right Form */}
                <div className="form-container">
                  {!flip ? (
                    <SignIn onFlip={() => setFlip(true)} setToken={setToken} />
                  ) : (
                    <SignUp onFlip={() => setFlip(false)} />
                  )}
                </div>
              </div>
            </div>
          }
        />
      ) : (
        <>
          <Route path="/" element={<Navigate to="/MyDashboard" />} />
          <Route path="/MyDashboard/*" element={<MyDashboard />} />
        </>
      )}
    </Routes>
  );
}

export default App;
