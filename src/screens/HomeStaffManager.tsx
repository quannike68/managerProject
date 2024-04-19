import { View, Text } from 'react-native'
import React from 'react'

export default function HomeStaffManager() {
  return (
        <View style = {{flex : 1}}>
            <View style={{flex : 1 , backgroundColor : "red"}}></View>
            <View style={{flex : 0.5 , backgroundColor : "blue"}}></View>
            <View style={{flex : 5 ,backgroundColor : "green"}}></View>
        </View>
  )
}