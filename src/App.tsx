import React from "react";
import SplashscreenPage from "./pages/splash_screen/page";
import LoginPage from "./pages/public/login_page/page";

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
      <LoginPage />
    </div>
  );
}

export default App;
