import { View, TextInput,Button, StyleSheet, Modal, Image } from 'react-native'
import React, { useState } from 'react'



export default function GoalInput({addGoalHandler, modalIsVisible, modalToggle}) {
    const [goal,setGoal]=useState('')
    function goalInputHandler(enteredText){
        setGoal({text: enteredText, id:Math.random().toString()})
    }

    function addHandler(){
        addGoalHandler(goal)
        setGoal('')
        modalToggle()
    }

    function cancelHandler(){
        modalToggle()
    }

  return (
    <Modal visible={modalIsVisible} animationType='slide'>
    <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput 
        onChangeText={goalInputHandler} 
        style={styles.textInput} 
        placeholder='Your goal...'
        value={goal.text}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button onPress={addHandler} title='Add Goal' color='#b180f0'/>
            </View>
            <View style={styles.button}>
                <Button onPress={cancelHandler} title='Cancel' color='#f31282'/>
            </View>
        </View>
    </View>
    </Modal>
  )
}

const styles=StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        padding: 8,
        color:'#120438',
        borderRadius: 6,
        padding: 16
      },
      buttonContainer:{
        flexDirection:'row',
        marginTop: 16,
      },
      button:{
        width: '30%',
        marginHorizontal: 8,
      },
      image:{
        width: 150,
        height: 100,
        margin: 20,

      }

})