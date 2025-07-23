import React from "react";

const SplashscreenPage = () => {
  return (
    <div className="w-screen h-screen bg-background flex items-center justify-center">
      <h1
        className="text-foreground text-3xl md:text-6xl cursor typewriter-animation p-4"
        style={{ textShadow: "4px 4px 8px #001D48" }}
      >
        Connectwave
      </h1>
    </div>
  );
};

export default SplashscreenPage;
