import React from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme,} from 'react-native-paper';
import merge from 'deepmerge';
import Navigation from "./navigation/Navigation"
import { useSelector } from "react-redux"

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function Main() {

  const isThemeDark = useSelector(state => state.themes)
  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
          <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
              <Navigation />
            </NavigationContainer>
          </PaperProvider>
  );
}

const styles = StyleSheet.create({});
