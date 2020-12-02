import React from "react";
import { 
  NavigationContainer, 
  DarkTheme as NavigationDarkTheme, 
  DefaultTheme as NavigationDefaultTheme 
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity ,View, StyleSheet ,DrawerLayoutAndroid, Text} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  List,
  Button,
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import merge from 'deepmerge';
import Login from "./Login"

export const PreferencesContext = React.createContext({
  setTheme: () => {},
  isThemeDark: false,
});

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Stack = createStackNavigator();
const title = "Naveen Nani 🤟🤟"
const content = "Now that the Context is available at every component, all we need to do is import it. Next thing is to provide the user with some UI element to control changing the theme. We will use Paper's Switch for this purpose."


const HomeScreen = ({ navigation }) =>{
  const navigationView = (
    <View style={styles.navigationContainer}>
      <Button mode="outlined"  color="blue" onPress={() =>
      navigation?.push('Login')
    }>Log IN</Button>
    </View>
  );

return (
  <>
   <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => navigationView}
    >

  <TouchableOpacity
    onPress={() =>
      navigation?.push('Details', {
        title,
        content,
      })
    }
    >
    <Card>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
    </Card>
  </TouchableOpacity>
    </DrawerLayoutAndroid>
  </>
);
}

const DetailsScreen = (props) => {
  const { title, content } = props?.route?.params;
  return (
    <List.Section >
      <List.Subheader>{title}</List.Subheader>
      <List.Item title={content} />
    </List.Section>
  );
};

export default function Main() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

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
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Details" component={DetailsScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </PreferencesContext.Provider>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    padding: 8
  }
});
