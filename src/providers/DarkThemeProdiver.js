
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled, []);
  
  return (
    <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}>
      <StatusBar backgroundColor = {'transparent'} translucent = {true} />
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;