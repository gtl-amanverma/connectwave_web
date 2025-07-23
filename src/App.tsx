import React from "react";
import SplashscreenPage from "./pages/splash_screen/page";
import RouteIndex from "./routes";
import { useAutoAddQueryParams } from "./hooks/useAutoAddQueryParams";

function App() {
  const [isDisplaySplashScreen, setIsDisplaySplashScreen] =
    React.useState(false);
  useAutoAddQueryParams({ lang: "en", token: "123" });

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
