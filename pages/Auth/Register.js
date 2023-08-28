import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import Header from '../../components/Header'

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Inscription" return={navigation} showHeader={true} />
      <View style={styles.view1}>
        <Image source={require('../../assets/images/transfer_money.png')} style={styles.image} />
      </View>
      <View style={styles.view2}>
        <Text style={{color:"#000", fontWeight: "bold", fontSize: 25, marginBottom:"6%"}}>Create Account</Text>
        <View style={{width:"100%", padding:12}}>
            <TextInput label="Nom complet" style={styles.textInput} underlineColor="#efefef" placeholder='assia jean gontran' />
            <TextInput label="Numéro de téléphone" keyboardType="number-pad" style={styles.textInput} underlineColor="#efefef" placeholder='assia.ngoran@gmail.com' />
            <TextInput label="Adresse email" style={styles.textInput} underlineColor="#efefef" placeholder='assia.ngoran@gmail.com' />
            <TextInput label="Mot de passe" style={styles.textInput} secureTextEntry={true} right={<TextInput.Icon icon="eye" color="#7c55fe" />} underlineColor="#efefef" placeholder='*************' />
            <Text style={{color:"#000", textAlign:"right", marginTop:"0.5%", fontWeight: "bold", fontSize: 15}}>Forgot password ?</Text>
            <Button mode='contained' style={styles.boutonLogin} onPress={() => navigation.navigate('Login')}>Register</Button>
            <Text style={{textAlign:"center", marginTop:"2%", fontSize:15}}>J'ai déjà un compte. <Text style={{color:"#7c55fe"}} onPress={() => navigation.navigate('Login')}>Connectez-vous</Text></Text>
        </View>
      </View>
    </View>
  )
}

export default Register

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
        flex:2.5,
        backgroundColor:"#efefef",
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        justifyContent:"center",
        alignItems:"center"
    },
    textInput:{
        borderBottomWidth:0,
        backgroundColor:"#fff",
        marginBottom:20
    },
    boutonLogin:{
        backgroundColor:"#7c55fe",
        marginTop:"5%",
        borderRadius:5
    },
    image:{
        width: 250,
        height: 250
    }
})