import { StyleSheet, View,Text, Pressable } from "react-native"



function GoalItem({itemData, onDeleteItem}){

    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#210644'}} onPress={onDeleteItem.bind(this, itemData.item.id)}>

            <Text style={styles.goalText}>{itemData.item.text}</Text>
            </Pressable>

        </View>
    )
}
export default GoalItem

const styles=StyleSheet.create({
    goalItem:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
        
        color: 'white',
    },
    goalText:{
        color: 'white',
        padding: 8,
    }
})