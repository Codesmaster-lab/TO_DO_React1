import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <View>
                 <Text style={styles.itemText}>{props.text}</Text>
                 </View>
            </View>
            <View style={styles.circular}></View>
        </View>
        
    )
}

const styles =StyleSheet.create(
    {
         item:{
           backgroundColor:'#f0ffff',
           padding:15,
           borderRadius:10,
           flexDirection:'row',
           alignItems:'center',
           justifyContent:'space-between',
           marginBottom:10
         },
         itemLeft:{
             padding:7,
           flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
         },
         square:{
          width:24,
          height:24,
          backgroundColor:'#90ee90',
          opacity:0.4,
          borderRadius:5,
          marginRight:15
         },
         itemText:
         {
          maxWidth:'100%'
         },
         circular:{
           width:12,
           height:12,
           borderColor:'#90ee90',
           borderWidth:2,
           borderRadius:5

         },

    }
);
export default Task;