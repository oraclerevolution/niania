import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'

const Login = ({navigation}) => {
  const [eyeOn, setEyeOn] = useState(true)

  const changeEye = () => {
    setEyeOn(!eyeOn)
  }
  
  return (
    <View style={styles.container}>
      
      <View style={styles.view2}>
        <Text style={{color:"#000", fontWeight: "bold", fontSize: 25, marginBottom:"6%"}}>Connectez-vous</Text>
        <View style={{width:"100%", padding:12}}>
            <TextInput label="Adresse email ou téléphone" style={styles.textInput} underlineColor="#efefef" placeholder='assia.ngoran@gmail.com' />
            {eyeOn ? (
              <TextInput label="Mot de passe" style={styles.textInput} secureTextEntry={true} right={<TextInput.Icon icon="eye" color="#7c55fe" onPress={changeEye} />} underlineColor="#efefef" placeholder='*************' />
            ):(
              <TextInput label="Mot de passe" style={styles.textInput} secureTextEntry={true} right={<TextInput.Icon icon="eye-off-outline" color="#7c55fe" onPress={changeEye} />} underlineColor="#efefef" placeholder='*************' />
            )}
            <Text style={{color:"#000", textAlign:"right", marginTop:"0.5%", fontWeight: "bold", fontSize: 15}}>Forgot password ?</Text>
            <Button mode='contained' style={styles.boutonLogin} onPress={() => navigation.navigate('CodeOtp')}>Connexion</Button>
            <Text style={{textAlign:"center", marginTop:"2%", fontSize:15}}>Vous n'avez pas de compte ? <Text style={{color:"#7c55fe"}} onPress={() => navigation.navigate('Register')}>Creez un compte</Text></Text>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    view1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    view2:{
        flex:1,
        backgroundColor:"#efefef",
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
    },
    textInput:{
        borderBottomWidth:0,
        backgroundColor:"#fff",
        marginBottom:10
    },
    boutonLogin:{
        backgroundColor:"#7c55fe",
        marginTop:"5%",
        borderRadius:5
    },
    image:{
        width: 200,
        height: 200
    }
})