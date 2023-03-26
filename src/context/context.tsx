import { createContext, useContext, useState } from "react";

interface ContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeContext = createContext<ContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

interface ModeContextProviderProps {
  children: React.ReactNode;
}

export const ModeContextProvider: React.FC<ModeContextProviderProps> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): ContextType => {
  const context = useContext(DarkModeContext);
  return context;
};
