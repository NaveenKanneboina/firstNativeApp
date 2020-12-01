import React from "react";
import { 
  NavigationContainer, 
  DarkTheme as NavigationDarkTheme, 
  DefaultTheme as NavigationDefaultTheme 
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity ,View, Button} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  List,
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

const HomeScreen = ({ navigation }) => (
  <>
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
  <View flexDirection="row" justifyContent="space-around">
    <Button 
      title="Sign Up"
      onPress={() =>
        navigation?.push('My Screen')
      }/>
    <Button 
      title="Login"
      onPress={() =>
        navigation?.push('Login')
      }/>
    </View>
  </>
);

const DetailsScreen = (props) => {
  const { title, content } = props?.route?.params;
  return (
    <List.Section >
      <List.Subheader>{title}</List.Subheader>
      <List.Item title={content} />
    </List.Section>
  );
};

const MyScreen = () => {
  // const { title, content } = props?.route?.params;
  return (
    <List.Section >
      <List.Subheader>My Screen</List.Subheader>
      <List.Item title="welcome" />
    </List.Section>
  );
};

export default function App() {
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
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="My Screen" component={MyScreen} />
                <Stack.Screen name="Login" component={Login} />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </PreferencesContext.Provider>
  );
}