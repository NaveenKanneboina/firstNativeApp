import React from 'react';
import { useTheme, Appbar, Switch } from 'react-native-paper';
import { StyleSheet } from 'react-native'
// import { PreferencesContext } from "../context/PreferencesContext";
import { useSelector , useDispatch } from "react-redux"
import { darkTheme } from "../Actions"


const Header = ({}) => {

  const theme = useTheme();
  const dispatch = useDispatch();
  const mode = useSelector(state => state.themes)
  // const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
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
          value={mode}
          onValueChange={()=>dispatch(darkTheme())}
        />
    </Appbar.Header>
  )
}

export default Header

const styles = StyleSheet.create({})
