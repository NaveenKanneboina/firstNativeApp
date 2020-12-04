import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Modal } from 'react-native';

const ToDo = () => {
  const [input, setInput] = useState("")
  const [toDo, setToDo] = useState([])
  const [visible, setVisible] = useState(false)
  const Task = (message) => {
    setInput(message)
  }
  const add = () => {
    setToDo([...toDo, input])
    setInput("")
    setVisible(!visible)
  }
const cancel = () => {
  setVisible(!visible)
  setInput()
}
  const remove = (value) => {
    console.log(value)
    // setToDo(toDo.splice(index,1));
    setToDo(toDo.filter((x)=> x != value))
    // xx =xx.filter((x) => x != elementToRemove) 
  }

  return (
    <View style={styles.container}>
      <Button title="ADD NEW GOALS" onPress={() => setVisible(!visible)}/>
      <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Enter Task" onChangeText={Task} value={input}/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>

            <Button title="Cancel" color="red" style={styles.button} onPress={cancel} />
            </View>
            <View style={styles.button}>

            <Button title="ADD" style={styles.button} onPress={add} disabled={!input || toDo.includes(input)}/>
            </View>
          </View>
        </View>
      </Modal>
      <FlatList data={toDo} renderItem={itemData => toDo.length>0 ? 
        (<View style={styles.todo}>
          <View style={styles.messages}>
            <Text style={{margin:20}}> {toDo.indexOf(itemData.item) + 1}. {itemData.item.toUpperCase()}</Text>
          </View>
          <View>
            <Button title="Delete" onPress={()=>remove(itemData.item)}/>
          </View>
        </View>
        )
        :<></>}/>
    </View>
  );
}
export default ToDo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin:40,
  },
  inputContainer:{
  width:"100%",
  flex:1,
  justifyContent:"center",
  alignItems:"center"
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    width:"100%"
  },
  button:{
    marginBottom:50,
    width:"20%",
  },
  input:{
    height: 40,
    width:"80%",
    margin: 10,
    borderBottomColor:"black",
    borderBottomWidth: 1,
    paddingLeft: 10
  },
  todo:{
    flexDirection:"row", 
    alignItems:"center",
    flexWrap:"wrap"
  },
  messages:{
    flex:1,
  }
});
