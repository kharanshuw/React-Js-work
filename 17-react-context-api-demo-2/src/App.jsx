import React, { useEffect } from 'react';
import ThemeProvider from "./context/ThemeProvider"
import { useState } from 'react';
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card';



function App() {

  const [themeMode, setThemeMode] = useState("light");

  const darktheme = () => {
    setThemeMode("light");
  }

  const lighttheme = () => {
    setThemeMode("dark");
  }



  useEffect(
    () => {
      document.querySelector('html').classList.remove("light","dark")

      document.querySelector('html').classList.add(themeMode);
    },[themeMode]
  )

  return (


    <ThemeProvider value={{ themeMode, darktheme, lighttheme }}>



      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/*themebtn  */}
            <ThemeBtn></ThemeBtn>

          </div>

          <div className="w-full max-w-sm mx-auto">

            {/*card  */}
            <Card></Card>

          </div>
        </div>
      </div>


    </ThemeProvider>


  );
}

export default App;
