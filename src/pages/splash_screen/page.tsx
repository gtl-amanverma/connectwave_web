import React from "react";

const SplashscreenPage = () => {
  return (
    <div className="w-screen h-screen bg-background-primary flex items-center justify-center">
      <h1
        className="text-white text-3xl md:text-5xl cursor typewriter-animation"
        style={{ textShadow: "4px 4px 8px rgba(255,255,255,0.5)" }}
      >
        Connectwave
      </h1>
    </div>
  );
};

export default SplashscreenPage;
