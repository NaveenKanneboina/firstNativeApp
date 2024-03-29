import React from 'react'
import { StyleSheet,} from 'react-native'
import { List } from 'react-native-paper';

const DetailsScreen = (props) => {
    const { title, content } = props?.route?.params;
  return (
    <List.Section >
      <List.Subheader>{title}</List.Subheader>
      <List.Item title={content} />
    </List.Section>
  );
}

export default DetailsScreen

const styles = StyleSheet.create({})
