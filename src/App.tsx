import React from "react";
import SplashscreenPage from "./pages/splash_screen/page";
import RouteIndex from "./routes";

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
      <RouteIndex />
    </div>
  );
}

export default App;
