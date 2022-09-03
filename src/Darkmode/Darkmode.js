import { useState, createContext } from "react";

const DarkModeContext = createContext();

const DarkmodeProvider = (props) => {
  const [dark, setDark] = useState(true);
  const toggleMode = () => {
    setDark(!dark);
  };

  return (
    <div>
      <DarkModeContext.Provider value={{ dark, toggleMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
};

export { DarkModeContext, DarkmodeProvider };
