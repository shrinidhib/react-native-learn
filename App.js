
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  
  const [goalList,setGoalList]=useState([])
  const [modalIsVisible,setModalIsVisible]=useState(false)

  function modalToggle(){
    setModalIsVisible(!modalIsVisible)
  }

  function addGoalHandler(goal){
    setGoalList((prev)=>{
      return [...prev, goal]
    });
  }

  function deleteGoalHandler(id){
    setGoalList((prev)=>{
      return prev.filter((item)=>item.id!==id)
    })
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#a065ec' onPress={modalToggle}/>
      <GoalInput addGoalHandler={addGoalHandler} modalIsVisible={modalIsVisible} modalToggle={modalToggle} />
      <View style={styles.goalsContainer}>
      {/* <ScrollView > */}
      <FlatList data={goalList} renderItem={itemData=>{
          return <GoalItem 
          itemData={itemData}
          onDeleteItem={deleteGoalHandler}/>
        }}
        keyExtractor={(item,index)=>{
            return item.id
        }}/>
        {/* {goalList.map((g)=>( */}
          
        {/* ))} */}
      {/* </ScrollView> */}

      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop: 70,
    paddingHorizontal:16,
    flex: 1,
  },
  
  goalsContainer:{
    flex: 5,
  }

});
