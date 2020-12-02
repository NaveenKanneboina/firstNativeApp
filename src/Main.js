import React from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme,} from 'react-native-paper';
import merge from 'deepmerge';
// import Navigation from "./navigation/Navigation"
import Drawer from "./Drawer/Drawer"
import { PreferencesContext } from "./context/PreferencesContext"

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function Main() {
    
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
        <PreferencesContext.Provider value={preferences}>
          <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
              <Drawer theme={theme} />
            </NavigationContainer>
          </PaperProvider>
        </PreferencesContext.Provider>
  );
}

const styles = StyleSheet.create({});
