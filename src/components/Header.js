import React from 'react';
import { useTheme, Appbar, Switch } from 'react-native-paper';
import { StyleSheet } from 'react-native'
import { PreferencesContext } from "../context/PreferencesContext";


const Header = ({}) => {

  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}
    >
      <Appbar.Content title="Dark Mode" />
        <Switch
          style={[{ backgroundColor: theme.colors.accent }]}
          color={'red'}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
    </Appbar.Header>
  )
}

export default Header

const styles = StyleSheet.create({})
