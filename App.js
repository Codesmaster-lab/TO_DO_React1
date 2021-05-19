import { StatusBar } from 'expo-status-bar';

import Task from './components/Task'
import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';

export default function App() {
  const[task,setTask]= useState();
  const[taskItems,setTaskItems]=useState([]);
  
  const handleAddTask = () =>{
    Keyboard.dismiss();
   setTaskItems([...taskItems, task])
   setTask(null);
  }

  const completeTask=(index)=>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
   
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks :- </Text>
      </View>
      <View style={styles.items}>
        {
              taskItems.map((item,index) => {
                return(   
            <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
              <Task  text={item} />
                
              </TouchableOpacity>
                )
          }) 
        }
           
      </View>
 
 
      <KeyboardAvoidingView behavior={Platform.OS==="ios"?"padding":"height"}
      style={styles.writeTask}>
      <TextInput style={styles.Input} placeholder={'Write a Task'} value={task} onChangeText={text=>setTask(text)} />  
      <TouchableOpacity onPress={()=>handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3'
  }, 
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal:20
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:25
  },
  items:{
    marginTop:10,
    padding:15,
    fontWeight:'bold'
  },
  writeTask:{
    position:'absolute',
    bottom:10,
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  Input:{
    paddingVertical:15,
    paddingHorizontal:15,
    paddingLeft:10,
    backgroundColor:'#f0f8ff',
    borderRadius:60,
    borderColor:'#00ffff',
    borderWidth:1,
    width:'75%'
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#00ffff',
    borderWidth:1
  },
  addText:{},
  
});
  