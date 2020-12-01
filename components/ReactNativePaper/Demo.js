import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Appbar , Menu,  Divider, Provider , Button, Portal} from 'react-native-paper';

const Demo = () => {
  const _goBack = () => console.log('Went back');
  
  const _handleSearch = () => console.log('Searching');
  
  const _handleMore = () => console.log('Shown more');
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <>
    <Appbar style={{paddingTop:40}}>
   <Appbar.Action
     icon="menu"
     size={40}
     onPress={() => console.log('Pressed archive')}
    />
    <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
    <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
    <Appbar.Action
      icon="delete"
      onPress={() => console.log('Pressed delete')}
    />
  </Appbar>
  <Appbar.Header>
  <Appbar.BackAction onPress={_goBack} />
  <Appbar.Content title="Title" subtitle="Subtitle" />
  <Appbar.Action icon="magnify" onPress={_handleSearch} />
  <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
</Appbar.Header>
<View style={{ flex: 1 }}>
    <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
    <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
    <Menu.Item icon="content-cut" onPress={() => {}} title="Cut" disabled />
    <Menu.Item icon="content-copy" onPress={() => {}} title="Copy" disabled />
    <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
  </View>
  <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button size={50} icon="menu" onPress={openMenu}>hello</Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
    <Portal.Host>
    <Text>Content of the app</Text>
  </Portal.Host>
</>
  )
}


export default Demo
