import React from "react";
import SplashscreenPage from "./pages/splash_screen/page";

function App() {
  const [isDisplaySplashScreen, setIsDisplaySplashScreen] =
    React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisplaySplashScreen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!isDisplaySplashScreen) {
    return <SplashscreenPage />;
  }

  return (
    <div>
      <h1 className="text-4xl">Connectwave</h1>
    </div>
  );
}

export default App;
