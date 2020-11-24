import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState("")
  const [toDo, setToDo] = useState([])
  const Task = (message) => {
    setInput(message)
  }
  const add = () => {
    setToDo([...toDo, input])
    setInput("")
  }
  // const remove = (index) => {
  //   setToDo(toDo.splice(index,1));
  // }

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} placeholder="Enter Task" onChangeText={Task} value={input}/>
        <Button title="ADD" style={styles.button} onPress={add} disabled={!input || toDo.includes(input)}/>
      </View>
      <FlatList data={toDo} renderItem={itemData => toDo.length>0 ? 
        (<TouchableOpacity><Text key={itemData.index}> {toDo.indexOf(itemData.item) + 1}. {itemData.item.toUpperCase()}</Text>
        </TouchableOpacity>)
        :<></>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin:20,
  },
  button:{
    marginBottom:50,
  },
  input:{
    height: 40,
    margin: 10,
    borderBottomColor:"black",
    borderBottomWidth: 1,
    paddingLeft: 10
  }
});
