import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { Button, TextInput } from 'react-native-paper'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TapeAmountInput from '../../components/TapeAmountInput';
import CurrencyTransfer from '../../components/CurrencyTransfer';

const SendForm = ({ navigation, route }) => {
    const correspondant = route.params?.correspondant
    console.log("correspondant", correspondant);
    const [tapeAmount, setTapeAmount] = useState('');
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Regis Animan',
            number: "+2250707881667",
            image: "icon.png"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Yann Doe',
            date: "+2250171902253",
            image: "icon.png"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Assia Jean',
            date: "+2250709483463",
            image: "icon.png"
        },
    ];

    const currencyData = [
        { currency: 'XOF Solde', balance: "100000" },
        { currency: 'XAF Solde', balance: "89384" },
        { currency: 'USD Solde', balance: "0" },
    ];

    const handleTapeAmountChange = (text) => {
        setTapeAmount(text);
    };

    const Item = ({ id, title, number, image }) => (
            <TouchableOpacity style={{ flex: 1, flexDirection:"column", height: 100, width:100, marginTop: "3%", borderRadius:"50%", marginRight: 10 }}>
                    <Image style={{ width: "100%", height: "100%", borderRadius: 50 }} source={require("../../assets/icon.png")} />
            </TouchableOpacity>
    );

    const ajouterNumero = (numero) => {
        console.log(numero);
        setNumeroSaisi(numeroSaisi + numero);
    };

    const [numeroSaisi, setNumeroSaisi] = useState('');
    return (
        <View style={{ flex: 1 }}>
            <Header title="Envoyez de l'argent (niania)" return={navigation} showHeader={true} />
            <View style={styles.container}>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: "3%" }}>Derniers destinataires</Text>
                    <SafeAreaView>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => <Item id={item.id} title={item.title} number={item.number} image={item.image} />}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </SafeAreaView>
                </View>
                {/* <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <TextInput
                        value={numeroSaisi}
                        onChange={(e) => setNumeroSaisi(e)} placeholder='Numéro de télephone'
                        style={{ width: "90%" }}
                    />
                    <View style={{ alignItems: "center", justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons name="phone" size={30} color="black" />
                    </View>
                </View> */}
                <View style={{ padding: 10, flex:1 }}>
                    <TapeAmountInput value={tapeAmount} onChangeText={handleTapeAmountChange} />
                    <View style={{justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
                        <TouchableOpacity onPress={() => navigation.navigate("Repertoire")} style={{flex:1.8, flexDirection:"row", borderWidth:1, borderColor:'lightgray', justifyContent:"center", alignItems:"center", borderRadius:20, padding:8, margin:3}}>
                            <Text style={{fontSize:20}}>Sélectionner l'utilisateur  </Text>
                            <MaterialCommunityIcons name="human-edit" size={25} color="black" />
                        </TouchableOpacity>
                        <View style={{flex:1, flexDirection:"row", borderWidth:1, borderColor:'lightgray', justifyContent:"center", alignItems:"center", borderRadius:20, padding:8, margin:3}}>
                            <Text style={{fontSize:20}}>Scanner QR  </Text>
                            <MaterialCommunityIcons name="qrcode" size={25} color="black" />
                        </View>
                    </View>
                    <View style={{flex:0.4}}>
                        <Text style={{fontWeight:"bold", fontSize:17, textAlign:"center", marginTop:"3%", color:"gray"}}>Vous envoyez à </Text>
                        <Text style={{fontWeight:"bold", fontSize:30, textAlign:"center", marginTop:"3%"}}>{correspondant}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <CurrencyTransfer currencyData={currencyData} onCurrencySelect={handleTapeAmountChange} />
                        <Button mode="contained" style={{backgroundColor:"#7c55fe", marginBottom:"3%"}} labelStyle={{color:"white", fontSize:20}} onPress={() => navigation.navigate("Annonces")}>Envoyer</Button>
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
        flex: 1,
        position: "absolute",
        bottom: 0,
        width: "100%",
    }
})