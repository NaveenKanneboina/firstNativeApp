import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Main from "./src/Main"
import { createStore } from "redux"
import allReducers from "./src/Reducers"
import { Provider} from "react-redux"


const App = () => {

  const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
   
  return (
    <Provider store={store}>
      <Main/>
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({})
