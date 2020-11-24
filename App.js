import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [input, setInput] = useState("")
  const [toDo, setToDo] = useState([])
  const add = () => {
    setToDo([...toDo, input])
    setInput("")
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} placeholder="Enter Task" onChange={(e)=>setInput(e.target.value)} value={input}/>
        <Button title="ADD" style={styles.button} onPress={add} disabled={!input}/>
      </View>
      <View>
        {toDo.map(task => <Text> {toDo.indexOf(task) + 1} {task.toUpperCase()}</Text>)}
      </View>
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
    margin: 10,
    borderBottomColor:"black",
    borderBottomWidth: 1,
  }
});
