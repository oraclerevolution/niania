import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Button } from 'react-native-paper'
import { Icon } from 'react-native-vector-icons/FontAwesome'
Icon

const Onboarding = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={require('../assets/images/carte_.png')} imageStyle={{ resizeMode:"cover", height:400, width:250, position:"absolute", top:"28%", left:"20%" }}>
      <Text style={styles.title}>Get better with niania.</Text>
      {/* <Image style={styles.image} source={require('../assets/images/carte_.png')} /> */}
      <View style={{marginTop:"10%", padding:"10%", width:"100%", position:"relative", top:"17%",}}>
        <Text style={{color:"lightgray", fontSize: 18}}>Que pouvez-vous faire avec niania ?</Text>
        <Button mode='contained' style={{marginTop:"5%", backgroundColor:"#fff", alignItems:"flex-start", height: 50, justifyContent:"center", borderRadius:40}} labelStyle={{color:"#000", fontWeight: "bold", fontSize: 15, textAlign:"left"}}>Recevoir de l'argent</Button>
        <Button mode='contained' style={{marginTop:"5%", backgroundColor:"#7c55fe", alignItems:"flex-start", height: 50, justifyContent:"center", borderRadius:40, borderWidth:1, borderColor:"gray"}} labelStyle={{color:"#fff", fontWeight: "bold", fontSize: 15, textAlign:"left"}}>Envoyer de l'argent</Button>
        <View style={{position:"relative", top:"10%", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <Text style={{color:"#fff", fontWeight: "bold", fontSize: 18, textAlign:"left"}} onPress={() => navigation.navigate('Login')}>Skip</Text>
          <Button mode='contained' style={{borderRadius:40, borderWidth:1, borderColor:"#000", backgroundColor:"#000"}} labelStyle={{color:"#fff", fontWeight: "bold", fontSize: 15}} onPress={() => navigation.navigate('StepOne')}>Continue </Button>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#7c55fe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 55,
    position:"relative",
    bottom:"10%",
    fontWeight: 'bold',
    color: '#fff',
  },
  image:{
    width: 200,
    height: 200,
  }
})