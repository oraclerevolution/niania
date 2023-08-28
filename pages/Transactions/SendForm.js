import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { Button, TextInput } from 'react-native-paper'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ClavierNumerique from '../../components/Clavier';

const SendForm = ({ navigation }) => {

    const ajouterNumero = (numero) => {
        console.log(numero);
        setNumeroSaisi(numeroSaisi + numero);
    };

    const [numeroSaisi, setNumeroSaisi] = useState('');
    return (
        <View style={{ flex: 1 }}>
            <Header title="Envoyez de l'argent" return={navigation} showHeader={true} />
            <View style={styles.container}>
                <View style={{padding:10, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                    <TextInput 
                        value={numeroSaisi} 
                        onChange={(e) => setNumeroSaisi(e)} placeholder='Numéro de télephone'
                        style={{width:"90%"}}
                    />
                    <View style={{alignItems:"center", justifyContent:"center", alignItems:"center"}}>
                        <MaterialCommunityIcons name="phone" size={30} color="black" />
                    </View>
                </View>
                {/* <View style={styles.keyboardView}>
                    <View style={{borderWidth:1, height:60, justifyContent:"center", alignItems:"center"}}>
                        <Text style={{fontSize:30, color:"gray"}}>{numeroSaisi}</Text>
                    </View>
                    <ClavierNumerique onPress={ajouterNumero} />
                </View> */}
            </View>
        </View>
    )
}

export default SendForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    keyboardView: {
        flex:1,
        position:"absolute",
        bottom:0,
        width:"100%",
    }
})