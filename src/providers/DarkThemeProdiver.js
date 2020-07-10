
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled, []);
  
  return (
    <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}>
      <StatusBar backgroundColor = {darkThemeEnabled ? 'black' : 'white'} barStyle = {darkThemeEnabled ? 'light-content' : 'dark-content'} />
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;