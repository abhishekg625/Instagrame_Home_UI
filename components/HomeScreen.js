import { StyleSheet, Text, View , Image} from 'react-native'
import React, {useLayoutEffect} from 'react'
import StoriesTab from './StoriesTab'
import Posts from './Posts'

const HomeScreen = ({navigation}) => {
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:"Instagram",
      // leftHeader:()=>{
      //   <Image 
      //   style={{
        

      //   }}
      //   source={require('../assets/insta.jpg')}
      //   />
      // }
    })
  })
  return (
    <View style={styles.container}>
     <StoriesTab />
     <Posts />
     
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})